from setuptools import setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
  name = "do_username",
  version = "1.0.2",
  packages = ["do_username"],
  license = "Apache-2.0",
  author = "DigitalOcen, Matt Cowley, Shreyas S",
  author_email = "me@mattcowley.co.uk, shreyas.sreenivasa@gmail.com",
  url = "https://github.com/MattIPv4/do_username/tree/master/python",
  description = "DigitalOcean Username Generator",
  long_description = long_description,
  long_description_content_type = "text/markdown",
  classifiers=[
      "Programming Language :: Python :: 3",
      "License :: OSI Approved :: Apache Software License",
      "Operating System :: OS Independent",
  ],
  python_requires='>=3.6',
  entry_points= {
    "console_scripts": [
      "do_username = do_username.__main__:main",
      "do-username = do_username.__main__:main"
    ]
  }
)
