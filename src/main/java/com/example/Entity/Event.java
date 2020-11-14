package com.example.Entity;


import org.springframework.data.redis.core.RedisHash;

import javax.persistence.Entity;
import java.io.Serializable;
import java.util.Date;

@RedisHash("Event")
public class Event implements Serializable {
    private String senderId;
    private String receiverId;
    private String content;
    private  String sendTime;

    @Override
    public String toString() {
        return "Event{" +
                "senderId=" + senderId +
                ", receiverId=" + receiverId +
                ", content='" + content + '\'' +
                ", sendTime='" + sendTime + '\'' +
                '}';
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(String receiverId) {
        this.receiverId = receiverId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime;
    }



}
