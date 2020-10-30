import sys
from .generate import generate

def main():
  if len(sys.argv) >= 2:
    print(generate(sys.argv[1]))
  else:
    print(generate())

if __name__ == "__main__":
  main()
