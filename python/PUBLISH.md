# Publishing

Maintainer notes for publishing the PyPi package.

## Prerequisites

1. `setuptools` and `wheels` to build the python package. To install run `python3 -m pip install --user --upgrade setuptools wheel`
2. `twine` to upload to the package to PyPi. To install run `python3 -m pip install --user --upgrade twine`

## 1. Update version

Update the version in [setup.py](setup.py)

## 2. Build the package

Build the python package by running `python3 setup.py sdist bdist_wheel`.

Running this created the package which will be distributed in `./dist/`.

## 3. Get API token from PyPi

To get an API token from PyPi
1. Go to https://pypi.org and login to your account.
2. Once logged in, go to your account settings or https://pypi.org/manage/account/
3. Scroll down to the API tokens section and click *Add API token*
4. Enter a name for the token and make sure *Project: do_username* is selected in Scope
5. Copy the token and keep it safe as you will not be able to see it again. If you lose the token by any chance just generate a new one and delete the old one.

## 3. Publish the package

Publish the package using twine by running `python3 -m twine upload --repository pypi dist/*`

When twine prompts for credentials, enter *__token__* as your username and for your password enter the token generated in **Step 3**.

