import random

SEA_CREATURES = tuple("walrus seal fish shark clam coral whale crab lobster starfish eel dolphin squid jellyfish ray shrimp mantaRay angler snorkler scubaDiver urchin anemone morel axolotl".split(" "))
SEA_OBJECTS = tuple("boat ship submarine yacht dinghy raft kelp seaweed anchor".split(" "))
ADJECTIVE_DESCRIPTORS = tuple("cute adorable lovable happy sandy bubbly friendly floating drifting".split(" "))
SIZE_DESCRIPTION = tuple("large big small giant massive tiny little".split(" "))
CREATURE_DESCRIPTORS = tuple("swimming sleeping eating hiding".split(" "))

SEA_LIST = SEA_CREATURES + SEA_OBJECTS
DESCRIPTORS = ADJECTIVE_DESCRIPTORS + SIZE_DESCRIPTION

COLORS = "blue blueGreen darkCyan electricBlue greenBlue lightCyan lightSeaGreen seaGreen turquoise aqua aquamarine teal cyan gray darkBlue cerulean azure lapis navy".split(" ")

random_noun = lambda: random.choice(SEA_LIST)
random_descriptor = lambda noun: random.choice(DESCRIPTORS) if noun not in SEA_CREATURES else random.choice(DESCRIPTORS + CREATURE_DESCRIPTORS)
random_color = lambda: random.choice(COLORS)
format = lambda *array: "".join(map(lambda word: word[0].upper() + word[1:], array))

def generate(max_size=30):
  try:
    max_size = int(max_size)
    
    if max_size <= 0:
      raise ValueError
  except ValueError:
    raise ValueError("The max_size argument must be an integer number greater than zero.")

  noun = random_noun()
  descriptor = random_descriptor(noun)
  color = random_color()

  if len(descriptor + noun + color) <= max_size:
    return format(descriptor, color, noun)
  elif len(descriptor + noun) <= max_size:
    return format(descriptor, color)
  elif len(color + noun) <= max_size:
    return format(color, noun)
  else:
    return format(noun)[:max_size]
