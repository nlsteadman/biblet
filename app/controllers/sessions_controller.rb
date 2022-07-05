class SessionsController < ApplicationController
    skip_before_action :authorized

    def get_current_user
        render json: current_user
    end

    def login
        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            @token = encode_token({ user_id: @user.id})
            render json: { user: @user, token: @token}, status: :created
        else
            render json: { errors: ["Username and Password must match"]}, status: :unprocessable_entity
        end
    end

end