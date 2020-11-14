package com.example.Service;


import com.example.Entity.Event;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.messaging.core.QueueMessagingTemplate;
import org.springframework.cloud.aws.messaging.listener.annotation.SqsListener;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;



@Service
public class SqsService {

    private static final Logger logger = LoggerFactory.getLogger(SqsService.class);

    @Autowired
    QueueMessagingTemplate queueMessagingTemplate;


    @Value("${cloud.aws.end-point.uri}")
    String queueEndpoint;

    public void Send(Event event)
    {


        queueMessagingTemplate.convertAndSend(queueEndpoint,event);
    }






}
