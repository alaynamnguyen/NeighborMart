import 'package:flutter/material.dart';

class Map extends StatefulWidget {
  @override
  _MapState createState() => _MapState();
}

class _MapState extends State<Map> {
  final textColor = Colors.grey[500]; // color for the descriptions
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.green[300],
              elevation: 0.0,
              title: Text("Map"),
            ),
            body: ListView(
              children: [
                Padding(
                padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 20.0),
                // search box
                child: TextField(
                  decoration: InputDecoration(
                      labelText: "Search",
                      hintText: "Search",
                      prefixIcon: Icon(Icons.search),
                      border: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.green[300]),
                          borderRadius:
                              BorderRadius.all(Radius.circular(20.0)))),
                )),
                        Image.asset('images/map.png'),
              ],
            )));
  }
}