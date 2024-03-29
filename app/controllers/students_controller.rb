class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :edit, :update]
  skip_before_action :require_user, only: [:new, :create]
  before_action :require_same_student, only: [:edit, :update]
def index
  @students = Student.all
end
def new
  @student = Student.new
end
def show

end
def create
  @student = Student.new(student_params)
  if @student.save
flash[:notice] = "you have successfully signed up"
redirect_to @student
  else
       #binding.break
  render :new, status: :unprocessable_entity
end
end
def edit

end
def update

        if @student.update(student_params)
flash[:notice] = "you have successfully update your profile"
redirect_to @student
        else
          render :edit, status: :unprocessable_entity
end
end
private
def student_params
params.require(:student).permit(:name, :email, :password, :password_confirmation)
end
def set_student
    @student = Student.find(params[:id])
end
def require_same_student
  if current_user != @student
    flash[:notice] = "you can only edit your own profile"
    redirect_to student_path(current_user)
  end
end
end
