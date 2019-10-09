<?php
    require 'database.php';
    $postdata = file_get_contents("php://input");
    
    if(isset($postdata) && !empty($postdata)) {
        $request = json_decode($postdata);
        
        if(trim($request->number) === '' || (float)$request->amount < 0) {
            return http_response_code(400);
        }

        $title      = mysqli_real_escape_string($con, trim($request->title));
        $brief      = mysqli_real_escape_string($con, trim($request->brief));
        $content    = mysqli_real_escape_string($con, trim($request->content));
        $image      = mysqli_real_escape_string($con, trim($request->image));
        $created_at = mysqli_real_escape_string($con, trim($request->created_at));
        $status     = mysqli_real_escape_string($con, (int)$request->status);
        $user_id    = mysqli_real_escape_string($con, (int)$request->user_id);
        $category_id = mysqli_real_escape_string($con, (int)$request->category_id);

        $sql = "INSERT INTO `post`(`id`,`title`,`brief`, `content`, `image`, `created_at`, `status`, `user_id`, `category_id`)
                VALUES (null,'{$title}','{$brief}', '{$content}', '{$image}', '{$created_at}', '{$status}', '{$user_id}', '{$category_id}')";

        if(mysqli_query($con, $sql)) {
            http_response_code(201);
            $postblog = [
                'title'     => $title,
                'brief'     => $brief,
                'content'   => $content,
                'image'     => $brimage,
                'created_at'=> $created_at,
                'status'    => $status
                'user_id'   => $user_id,
                'category_id' => $category_id,
                'id'     => mysqli_insert_id($con)
            ];
            echo json_encode($postblog);
        } else {
            http_response_code(422);
        }
    }
?>