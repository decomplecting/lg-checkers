#!/bin/bash

# ONLY Run me when ready to deploy app.

function deploy()
{
    local timestamp=$(date +%s)
    git checkout -b deploy;
    lein cljsbuild clean;
    lein cljsbuild once;
    git add .;
    git commit -m "deploying app at $(timestamp)";

    git subtree push --prefix resources/public origin gh-pages;
    git checkout master;
    git branch -D deploy;
    echo "I think that worked";
    return 0;

}


function conditional-deploy()
{
    local branch="$(git describe --contains --all HEAD)";
    local target="master"
    if [ "$branch" == "$target" ]; then
        deploy
    else
        echo "Fucked up."
    fi
}

conditional-deploy
