<?php 
class Router
{
	static function start()
	{


		// контроллер и действие по умолчанию
		$controller_name = 'index';
		$action_name = 'nothing';
		

        $path = ($_SERVER['REQUEST_URI']);
		$path = explode('?', $path);
		$path = $path[0];

		$routes = explode('/', $path);

		// получаем имя контроллера
		if ( !empty($routes[1]) )
		{	
			$controller_name = $routes[1];
		}
		
		// добавляем префиксы
		$model_name = 'Model_'.$controller_name;
		$controller_name = 'Controller_'.$controller_name;
		
		if (isset($_GET)) {
			foreach ($_GET as $name => $value) {
				$action_name = $name;
				break;
			}
		}
		$action_name = 'action_'.$action_name;
        
		/*
        echo $model_name . "<br>";
		echo $controller_name . "<br>";
		echo $action_name . "<br>";
		sleep(1);
		*/
		
				


		// подцепляем файл с классом модели (файла модели может и не быть)

		$model_file = strtolower($model_name).'.php';
		$model_path = "./model/".$model_file;
		if(file_exists($model_path))
		{
			include "./model/".$model_file;
		}


		// подцепляем файл с классом контроллера
        if ($controller_name == "Controller_index.php") {
            $controller_file = strtolower($controller_name);
        }
        else {
            $controller_file = strtolower($controller_name).'.php';
        }

		$controller_path = "./controller/".$controller_file;
		
        if(file_exists($controller_path))
		{
 
			include "controller/".$controller_file;
		}
		else
		{
			/*
			правильно было бы кинуть здесь исключение,
			но для упрощения сразу сделаем редирект на страницу 404
			*/
			Router::ErrorPage404();
		}
		
        if (strrpos($controller_name, ".php") != false) {
            $controller_name = mb_substr($controller_name, 0, -4);
        }

		// создаем контроллер
		$controller = new $controller_name;
		$action = $action_name;
		
		if(method_exists($controller, $action))
		{
			$controller->$action();
		}
		else
		{
			// здесь также разумнее было бы кинуть исключение
			Router::ErrorPage404();
		}
        
	}
	
	function ErrorPage404()
	{
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
		header("Status: 404 Not Found");
		header('Location:'.$host.'404');
    }
}
?>
