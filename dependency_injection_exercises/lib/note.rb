class Note
  def initialize(title, body, note_formatter)
    @title = title
    @body = body
    @formatter = note_formatter
    @count = 0
  end

  def display
    @formatter.format(self)
  end

  def getCount
    puts @count
  end

  attr_reader :title, :body
end

class NoteFormatter
  def format(note)
    "Title: #{note.title}\n#{note.body}"
  end
end
