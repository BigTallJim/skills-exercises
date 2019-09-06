require "roman_numbers"

describe "Roman Number tests" do
  it "Returns I when passed 1" do
    expect(roman_number_convertor(1)).to eq ("I")
  end
  it "Returns II when passed 2" do
    expect(roman_number_convertor(2)).to eq ("II")
  end
  it "Returns III when passed 3" do
    expect(roman_number_convertor(3)).to eq ("III")
  end
  it "Returns IV when passed 4" do
    expect(roman_number_convertor(4)).to eq ("IV")
  end
  it "Returns V when passed 5" do
    expect(roman_number_convertor(5)).to eq ("V")
  end
  it "Returns VI when passed 6" do
    expect(roman_number_convertor(6)).to eq ("VI")
  end
  it "Returns VII when passed 7" do
    expect(roman_number_convertor(7)).to eq ("VII")
  end
  it "Returns VIII when passed 8" do
    expect(roman_number_convertor(8)).to eq ("VIII")
  end
  it "Returns IX when passed 9" do
    expect(roman_number_convertor(9)).to eq ("IX")
  end
  it "Returns X when passed 10" do
    expect(roman_number_convertor(10)).to eq ("X")
  end
  it "Returns XI when passed 11" do
    expect(roman_number_convertor(11)).to eq ("XI")
  end
  it "Returns XII when passed 12" do
    expect(roman_number_convertor(12)).to eq ("XII")
  end
  it "Returns XIII when passed 13" do
    expect(roman_number_convertor(13)).to eq ("XIII")
  end
  it "Returns XIV when passed 14" do
    expect(roman_number_convertor(14)).to eq ("XIV")
  end
  it "Returns XV when passed 15" do
    expect(roman_number_convertor(15)).to eq ("XV")
  end
  it "Returns XX when passed 20" do
    expect(roman_number_convertor(20)).to eq ("XX")
  end

end
