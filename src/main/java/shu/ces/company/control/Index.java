package shu.ces.company.control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller

public class Index {

    @RequestMapping("/")
    public String index() {
        return "index";
    }



    @GetMapping("/main")
    public String main() {
        return "main";
    }




}
