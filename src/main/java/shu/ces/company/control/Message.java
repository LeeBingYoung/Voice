package shu.ces.company.control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import shu.ces.company.model.Robot;
import shu.ces.company.model.RobotMessage;
import shu.ces.company.model.User;
import shu.ces.company.model.UserMessage;
import shu.ces.company.service.MessageService;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;
import java.util.List;

@Controller
public class Message {

    @Autowired
    MessageService messageService;

    @GetMapping(value="/message")
    public String message(){

        return "message";
    }


    @PostMapping(value="/handle_message")
    @ResponseBody

    public String handleMessage(@RequestParam("message") String receivedMessage, HttpSession httpSession){

        // get currentUser and currentRobot from session

        String sendMessage="this message from server";

        Timestamp timestamp=new Timestamp(System.currentTimeMillis());

        // save user message
        User u=(User) httpSession.getAttribute("currentUser");
        UserMessage userMessage=new UserMessage();
        userMessage.setUser_id(u.getUser_id());
        userMessage.setSend_time(timestamp);
        userMessage.setContent(sendMessage);
        userMessage.setAudio_path("null");
        messageService.addUserMessage(userMessage);

        // save robot message

        Robot r=(Robot) httpSession.getAttribute("currentRobot");
        RobotMessage robotMessage=new RobotMessage();
        robotMessage.setUser_id(u.getUser_id());
        robotMessage.setRobot_id(r.getRobot_id());
        robotMessage.setSend_time(timestamp);
        robotMessage.setAudio_path("null");
        robotMessage.setContent(receivedMessage);
        messageService.addRobotMessage(robotMessage);


        return sendMessage;
    }


    @GetMapping(value="/query_user_history")
    @ResponseBody
    public List<UserMessage> getUserHistory(HttpSession httpSession){

        User u=(User) httpSession.getAttribute("currentUser");
        return messageService.queryUserHistoty(u);

    }

    @GetMapping(value="/query_robot_history")
    @ResponseBody

    public List<RobotMessage> getRobotHistory(HttpSession httpSession){

        Robot r=(Robot) httpSession.getAttribute("currentRobot");
        User u=(User) httpSession.getAttribute("currentUser");
        return messageService.queryRobotHistory(u,r);

    }
    
}
