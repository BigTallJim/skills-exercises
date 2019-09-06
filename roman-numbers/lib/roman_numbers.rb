
def roman_number_convertor(number)
    @return_value = ""

    if number < 10
      @return_value += singles(number)
    elsif number.between?(10, 100)
      number_of_tens = number/10
      @return_value += tens(number)
      @return_value += singles(number-10)
    end
    return @return_value
end

def singles(number)
  return "IX" if number == 9
  return ("V" + ("I" * (number-5))) if number >= 5
  return "IV" if number == 4
  return ("I" * number) if number < 4
end

def tens(number)
  return "X"
end
