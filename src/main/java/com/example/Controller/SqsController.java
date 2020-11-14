package com.example.Controller;


import com.example.Entity.Event;
import com.example.Service.SqsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.aws.messaging.listener.annotation.SqsListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SqsController {


    @Autowired
    SqsService sqsService;

    @Autowired
    RedisTemplate redisTemplate;

    @CrossOrigin
    @PostMapping("/send")
    public void SendEvent(@RequestBody Event event)
    {

        System.out.println(event);
        sqsService.Send(event);
    }


    @SqsListener("lewisQueue")
    public void receive(Event event)
    {
        System.out.println(event);
        redisTemplate.opsForList().leftPush(event.getReceiverId(),event);
        System.out.println(redisTemplate.opsForList().range(event.getReceiverId(),0,-1));
    }

}
