package main

import "fmt"
import (
  "net/http"
  "io/ioutil"
  "encoding/json"
)

func main() {
	fmt.Println("Hello, komrades");

  resp, err := http.Get("http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=e05d2e271ed14eeea49b2b3ef191f51b:15:69644955")
  if err != nil {
    // handle error
  }
  defer resp.Body.Close()
  body, err := ioutil.ReadAll(resp.Body)

//  var target stuff;
  data := map[string]interface{}{}
  json.Unmarshal(body, &data);
  fmt.Println(data["results"]);
  fmt.Println(len(data));
}
