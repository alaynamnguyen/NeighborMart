import 'package:flutter/material.dart';
import 'package:nice_button/nice_button.dart';
import 'package:neighbormart/globals.dart' as globals;

class Request extends StatefulWidget {
  @override
  _RequestState createState() => _RequestState();
}

class _RequestState extends State<Request> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomPadding: false,
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.green[300],
          elevation: 0.0,
          title: Text('Request an Item'),
        ),
        body: Container(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 200),
            child: Column(children: <Widget>[
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: "Which item do you need?",
                      hintText: "Describe the item here",
                      prefixIcon: Icon(Icons.shopping_cart)
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 20),
                    child:
                  TextFormField(
                    decoration: InputDecoration(
                      labelText: "How many do you need?",
                      hintText: "Enter quantity here",
                      prefixIcon: Icon(Icons.confirmation_number)
                    ),
                  ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 40),
                    child: NiceButton(
                      width: 255,
                      elevation: 8.0,
                      radius: 52.0,
                      icon: Icons.check,
                      text: "Request Item",
                      background: Colors.green[300],
                      onPressed: () {
                      },
                    ),
                  ),
            ])));
  }
}
