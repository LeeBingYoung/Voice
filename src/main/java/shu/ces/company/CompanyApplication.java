package shu.ces.company;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;


@SpringBootApplication
public class CompanyApplication {

    public static void main(String[] args) throws IOException, com.baidu.speech.restapi.common.DemoException {
        SpringApplication.run(CompanyApplication.class, args);
        (new com.baidu.speech.restapi.ttsdemo.TtsMain()).run();
    }
}
