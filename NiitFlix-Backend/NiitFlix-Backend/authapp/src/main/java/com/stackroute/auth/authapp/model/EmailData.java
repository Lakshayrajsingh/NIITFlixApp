package com.stackroute.auth.authapp.model;

public class EmailData {
    private String receiver, messageBody, subject, attachment;

    public EmailData() {
    }

    public EmailData(String receiver, String messageBody, String subject, String attachment) {
        this.receiver = receiver;
        this.messageBody = messageBody;
        this.subject = subject;
        this.attachment = attachment;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getMessageBody() {
        return messageBody;
    }

    public void setMessageBody(String messageBody) {
        this.messageBody = messageBody;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    @Override
    public String toString() {
        return "EmailData{" +
                "receiver='" + receiver + '\'' +
                ", messageBody='" + messageBody + '\'' +
                ", subject='" + subject + '\'' +
                ", attachment='" + attachment + '\'' +
                '}';
    }
}

