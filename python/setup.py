from setuptools import setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
  name = "do_username",
  version = "1.0.2",
  packages = ["do_username"],
  license = "Apache-2.0",
  author = "Shreyas",
  author_email = "shreyas.sreenivasa@gmail.com",
  url = "https://github.com/shreyas44/do_username_py",
  description = "Digital Ocean username generator",
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
