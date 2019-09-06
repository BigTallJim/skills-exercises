require "remembering_names"

describe "the store_name method" do
  it "returns a sensible message" do
    expect(store_name("James")).to eq "Name stored"
  end
end
