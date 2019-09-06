require "note"

describe Note do
  let(:formatter)  { double :formatter}
  let(:count) { $count = 666 }  # just stores a variable of count for these tests (not overriding program)
  it "returns simple Mr Holton" do

    #formatter = double
    allow(formatter).to receive(:format).and_return("Title: Mr\nHolton")

    note = Note.new("Mr", "Holton", formatter)
    note.instance_variable_set(:@count, 999)
    puts count  #just local variable from above
    note.getCount  #has internal variable overritten
    expect(note.display).to eq("Title: Mr\nHolton")
  end
end

describe NoteFormatter do
  note = Note.new("Mr", "Holton", NoteFormatter.new)
  it "test formatter to returns simple Mr Holton" do
    expect(subject.format(note)).to eq("Title: Mr\nHolton")
  end
end
