#!/bin/bash


# Usage: ./autogit.sh [branch_name] [commit_message]


usage() {
  echo 'Autogit by Rashid';
  echo 'Usage: autogit [branch_name] [commit_message]';
  exit 0 
}


if [[ ${#} -eq 0 ]]
then
    usage
    exit 1
fi

# Do your thing
git add .

if [[ $? -eq 0 ]]
then
    echo ''
    echo 'Successfully added changes to the staging area.'
    echo ''
else
    echo 'Unable to add changes to the staging area' >&2
    exit 1
fi


git commit -m "${2}"

if [[ $? -eq 0 ]]
then
    echo ''
    echo 'Successfully commited your changes.'
    echo ''
else
    echo 'Unable to commit changes' >&2
    exit 1
fi


# branch name: Add more branches here
case "${1}" in
    dev)
        BRANCH="dev"
        ;;
    uat)
        BRANCH="uat"
        ;;
    *)
        BRANCH="main"
        ;;
esac


git push -u origin "${BRANCH}"

if [[ $? -eq 0 ]]
then
    echo ''
    echo "Successfully pushed your awesome changes!"
    echo ''
    exit 0
else
    echo 'Unable to push changes because an error occurred'
    exit 1
fi
