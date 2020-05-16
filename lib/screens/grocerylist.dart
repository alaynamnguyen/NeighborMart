import 'package:flutter/material.dart';
import 'package:nice_button/nice_button.dart';

class GroceryList extends StatefulWidget {
  @override
  _GroceryListState createState() => _GroceryListState();
}

class _GroceryListState extends State<GroceryList> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomPadding: false,
        backgroundColor: Colors.white,
        appBar: AppBar(
          backgroundColor: Colors.green[300],
          elevation: 0.0,
          title: Text('Offered Items'),
        ),
        body: Container(
            padding: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
            child: Center(
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 8.0, vertical: 10),
                    child: new Text(
                      "My Grocery List",
                      textAlign: TextAlign.center,
                      style: new TextStyle(fontSize: 20.0),
                    ),
                  ),
                  Image.asset('images/list.png'),
                ]))));
  }
}
