Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root 'game_of_lives#index'

	resources :game_of_life, :path => "/" do
		collection do
			post 'start' => "game_of_lives#start"
			post 'clear' => "game_of_lives#clear"
		end
	end	
end
