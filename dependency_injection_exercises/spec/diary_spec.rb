require "diary"

describe Entry do
  it "checks values are set up ok" do
    entry = Entry.new("Intro", "My first day")
    expect(entry.title).to eq("Intro")
    expect(entry.body).to eq("My first day")
  end
end

describe Diary do
  it "adds and entry to Diary" do
    subject.add(Entry.new("Intro", "My first day"))
    expect(subject.index).to eq("Intro")
  end
  # it "test dummy Entry class" do
  #     blh blah blah
  #
  # end
end
