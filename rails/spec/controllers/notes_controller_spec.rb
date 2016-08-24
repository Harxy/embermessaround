RSpec.describe NotesController do
  describe "GETS index" do
    it "successfully" do
      get :index
      expect(response.status).to equal(200)
    end

    it "gets created notes" do
      Note.create( :body => "hello")
      get :index
      expect(response.body).to include("hello")
    end

    it "gets multiple notes" do
      Note.create( :body => "hello" )
      Note.create( :body => "world" )
      get :index
      expect(response.body).to include("hello")
      expect(response.body).to include("world")
    end
  end
end
