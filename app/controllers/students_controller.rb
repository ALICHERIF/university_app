class StudentsController < ApplicationController
def index
  @students = Student.all
end
def new
  @student = Student.new
end
def show
  @student = Student.find(params[:id])
end
def create
  @student = Student.new(student_params)
  if @student.save
flash[:notice] = "you have successfully signed up"
redirect_to root_path
  else
       #binding.break
  render :new, status: :unprocessable_entity
end
end
def edit
    @student = Student.find(params[:id])
end
def update
      @student = Student.find(params[:id])
        if @student.update(student_params)
flash[:notice] = "you have successfully update your profile"
redirect_to @student
        else
          render :edit, status: :unprocessable_entity
end
end
private
def student_params
params.require(:student).permit(:name, :email)
end
end
