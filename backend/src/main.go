package main

import "fmt"
import (
  "net/http"
//  "io/ioutil"
  "encoding/json"
)

func main() {
//  resp, err := http.Get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Hillary+Clinton&begin_date=20151027&end_date=20151029&api-key=0abd2e8ce8d0988d7eda50ba18f19c82:14:73341622")
//  if err != nil {
//    // handle error
//  }
//  defer resp.Body.Close()
//  body, err := ioutil.ReadAll(resp.Body)
//
//  data := map[string]interface{}{}
//  json.Unmarshal(body, &data);
//
//  response := data["response"].(map[string]interface{});
//  docs := response["docs"].([]interface{});
//
//  fmt.Println(len(docs));

  http.HandleFunc("/data", foo);
  http.HandleFunc("/", http.FileServer(http.Dir("./frontend/dist")).ServeHTTP);
  http.ListenAndServe(":8080", nil)

  fmt.Println("blah");
}

func foo(w http.ResponseWriter, r *http.Request) {
  profile := Profile{"Alex", []string{"snowboarding", "programming"}}

  js, err := json.Marshal(profile)
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  w.Header().Set("Content-Type", "application/json")
  w.Write(js)
}

type Profile struct {
  Name    string
  Hobbies []string
}


