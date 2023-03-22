<?php

class API
{
    private $curl;

    public function __construct()
    {
        $this->curl = curl_init();

        // curl_setopt($this->curl, CURLOPT_PORT, API_PORT);
        curl_setopt($this->curl, CURLOPT_RETURNTRANSFER, true);
    }

    public function get($path, $params)
    {
        $url = API_ROUTE . $path . '?' . http_build_query($params);

        curl_setopt($this->curl, CURLOPT_URL,  $url);

        $curl_result = curl_exec($this->curl);
        $result = json_decode($curl_result, true);

        return $result;
    }
}
