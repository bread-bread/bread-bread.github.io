<?php 
    header('Content-Type: application/json');
    $name = $_POST['name'];
    $message = "$name прислал сообщение";
    $result = mail('p.reshetnev@yandex.ru', 'Заказ с сайта', $message);

    echo json_encode(array(
        'status' => $result,
    ));
    ?>