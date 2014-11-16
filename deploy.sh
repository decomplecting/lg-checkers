#!/bin/bash

# ONLY Run me when ready to deploy app.

lein cljsbuild clean;
lein cljsbuild once;

git subtree push --prefix resources/public origin gh-pages;

echo "I think that worked";
