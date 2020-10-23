RSpec.describe DOUsername do
  describe '.generate' do
    subject { described_class }

    # Please update this spec if module constants are updated
    # see more at: https://github.com/MattIPv4/do_username/pull/8
    it 'responds with different usernames based on srand' do
      [
        'HappyElectricBlueBoat', 'DriftingAquaShark', 'MassiveTurquoiseWhale'
      ].each_with_index do |username, i|
        srand i

        expect(subject.generate).to eq(username)
      end
    end

    it 'responds with string' do
      expect(subject.generate).to be_a String
    end

    it 'responds with CamelCase string' do
      expect(subject.generate.scan(/[A-Z]/).size).to be >= 3
    end

    context 'with noun part' do
      before { stub_const('DOUsername::SEA_LIST', ['walrus']) }

      it 'ends with a sea object or a creature' do
        expect(subject.generate).to end_with('Walrus')
      end
    end

    context 'with descriptor part' do
      before do
        stub_const('DOUsername::DESCRIPTORS', ['cute', 'huge'])
        stub_const('DOUsername::CREATURE_DESCRIPTORS', ['swimming'])
      end

      it 'has descriptor in generated username' do
        expect(subject.generate).to match(/Cute|Huge|Swimming/)
      end
    end

    context 'with color part' do
      before { stub_const('DOUsername::COLORS', ['blue']) }

      it 'contains a color in generated username' do
        expect(subject.generate).to match(/Blue/)
      end
    end

    context 'with max_size argument' do
      it 'responds with valid username based on sent size' do
        expect(subject.generate(15).size).to be <= 15
      end

      context 'when max_size is lower than the full combination' do
        before do
          stub_const('DOUsername::DESCRIPTORS', ['cute'])
          stub_const('DOUsername::SEA_LIST', ['walrus'])
          stub_const('DOUsername::COLORS', ['red'])
          stub_const('DOUsername::SEA_CREATURES', [])
        end

        it 'responds with full combination (descriptor + color + noun)' do
          expect(subject.generate(100)).to eq('CuteRedWalrus')
        end

        it 'responds with (descriptor + noun) username based' do
          expect(subject.generate(12)).to eq('CuteWalrus')
        end

        it 'responds with (color + noun) username based' do
          expect(subject.generate(9)).to eq('RedWalrus')
        end
        
        it 'responds with part of noun username' do
          expect(subject.generate(5)).to eq('Walru')
        end
      end

      context 'when is invalid' do
        it 'raises ArgumentError negative values' do
          expect {
            subject.generate(-99)
          }.to raise_error(ArgumentError, 'The max_size argument must be an integer number greater than zero.')
        end

        it 'raises ArgumentError for zero' do
          expect {
            subject.generate(0)
          }.to raise_error(ArgumentError, 'The max_size argument must be an integer number greater than zero.')
        end

        it 'raises ArgumentError for non-integer values' do
          expect {
            subject.generate('abc')
          }.to raise_error(ArgumentError, 'The max_size argument must be an integer number greater than zero.')
        end
      end
    end
  end
end
