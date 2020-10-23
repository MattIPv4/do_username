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

    context 'with noun part' do
      before { stub_const('DOUsername::SEA_LIST', ['walrus']) }

      it 'ends with a sea object or a creature' do
        expect(subject.generate).to end_with('Walrus')
      end
    end

    context 'with descriptor part' do
      before do
        stub_const('DOUsername::DESCRIPTORS', ['cute'])
        stub_const('DOUsername::SIZE_DESCRIPTORS', ['huge'])
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

    context 'with size argument' do
      it 'responds with valid username based on sent size' do
        expect(subject.generate(15).size).to be <= 15
      end

      context 'when size is lower than the combination' do
        it 'responds with valid username based on sent size' do
          expect(subject.generate(2).size).to eq 2
        end
      end

      context 'when is invalid' do
        it 'raises ArgumentError negative values' do
          expect {
            subject.generate(-99)
          }.to raise_error(ArgumentError, 'The max_size argument must be greater than zero.')
        end

        it 'raises ArgumentError for zero' do
          expect {
            subject.generate(0)
          }.to raise_error(ArgumentError, 'The max_size argument must be greater than zero.')
        end

        it 'raises ArgumentError for non-integer values' do
          expect {
            subject.generate('abc')
          }.to raise_error(ArgumentError, 'The max_size argument must be greater than zero.')
        end
      end
    end
  end
end
