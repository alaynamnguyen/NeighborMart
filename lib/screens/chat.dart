import 'package:flutter/material.dart';

class ChatBox extends StatefulWidget {
  @override
  _ChatBoxState createState() => _ChatBoxState();
}

class _ChatBoxState extends State<ChatBox> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomPadding: false,
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.green[300],
          elevation: 0.0,
          title: Text('Chat with Mark Gibbons'),
        ),
        body: Container(
            padding: EdgeInsets.symmetric(vertical: 0, horizontal: 0),
            child: Column(children: <Widget>[
              Image.asset('images/chat.png'),
              SizedBox(
                height: 0.0,
              ),
              Padding(
                  padding:
                      EdgeInsets.symmetric(vertical: 20.0, horizontal: 20.0),
                  child: TextFormField(
                    decoration: InputDecoration(
                      labelText: "Message Mark Gibbons",
                      hintText: "Enter your message here",
                      suffixIcon: Icon(Icons.send),
                      prefixIcon: Icon(Icons.add_box)
                    ),
                  ))
            ])));
  }
}
