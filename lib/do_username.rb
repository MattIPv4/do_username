module DOUsername
  SEA_CREATURES = %w(walrus seal fish shark clam coral whale crab lobster starfish eel dolphin squid jellyfish ray shrimp mantaRay angler snorkler scubaDiver urchin anemone morel axolotl).freeze
  SEA_OBJECTS = %w(boat ship submarine yacht dinghy raft kelp seaweed anchor).freeze

  ADJECTIVE_DESCRIPTORS = %w(cute adorable lovable happy sandy bubbly friendly floating drifting).freeze
  SIZE_DESCRIPTORS = %w(large big small giant massive tiny little).freeze
  CREATURE_DESCRIPTORS = %w(swimming sleeping eating hiding).freeze

  SEA_LIST = (SEA_OBJECTS + SEA_CREATURES).freeze
  DESCRIPTORS = (ADJECTIVE_DESCRIPTORS + SIZE_DESCRIPTORS).freeze

  COLORS = %w(blue blueGreen darkCyan electricBlue greenBlue lightCyan lightSeaGreen seaGreen turquoise aqua aquamarine teal cyan gray darkBlue cerulean azure lapis navy).freeze

  extend self

  def generate(max_size = 30)
    raise ArgumentError, 'The max_size argument must be greater than zero.' if max_size.to_i <= 0

    # Choose a noun first
    noun = random_noun

    # Choose a descriptor
    descriptor = random_descriptor(noun)

    # Choose a color
    color = random_color

    # Convert to title case and remove whitespace
    noun = format(noun)
    descriptor = format(descriptor)
    color = format(color)

    # Combine to create username shorter than or equal to given length
    if (descriptor + color + noun).length <= max_size
      descriptor + color + noun
    elsif (descriptor + noun).length <= max_size
      descriptor + noun
    elsif (color + noun).length <= max_size
      color + noun
    else
      noun[0...max_size]
    end
  end

  private

  def random_noun
    SEA_LIST.sample
  end

  def random_descriptor(noun)
    return DESCRIPTORS.sample unless SEA_CREATURES.include?(noun)

    (DESCRIPTORS + CREATURE_DESCRIPTORS).sample
  end

  def random_color
    COLORS.sample
  end

  def format(string)
    string[0].upcase + string[1..-1]
  end
end
