import 'package:flutter/material.dart';
import 'package:nice_button/nice_button.dart';
import 'package:neighbormart/globals.dart' as globals;

class Schedule extends StatefulWidget {
  @override
  _ScheduleState createState() => _ScheduleState();
}

class _ScheduleState extends State<Schedule> {
  final textColor = Colors.grey[500]; // color for the descriptions
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Scaffold(
            appBar: AppBar(
              backgroundColor: Colors.green[300],
              elevation: 0.0,
              title: Text("Schedule"),
            ),
            // left off here
            body: Center(
                child: Center(
                    child: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                  // question 1
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 8.0, vertical: 10),
                    child: new Text(
                      "Add a Grocery Trip",
                      textAlign: TextAlign.center,
                      style: new TextStyle(fontSize: 20.0),
                    ),
                  ),
                  // question 1
                  Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: TextField(
                          textAlign: TextAlign.center,
                          decoration: InputDecoration(
                              labelText: "Name of Store",
                              hintText: "Enter the name of the store",
                              prefixIcon: Icon(Icons.store),
                              border: OutlineInputBorder(
                                  borderSide:
                                      BorderSide(color: Colors.grey[300]),
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(20.0)))),
                          onChanged: (text) {
                            globals.name = text;
                          })),
                  // question 2
                  Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: TextField(
                        textAlign: TextAlign.center,
                        decoration: InputDecoration(
                            labelText: "Description",
                            hintText: "Enter a description of your trip",
                            prefixIcon: Icon(Icons.format_align_left),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(color: Colors.grey[300]),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(20.0)))),
                      onChanged: (text) {
                            globals.description = text;
                          })),
                  // question 3
                  Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: TextField(
                        textAlign: TextAlign.center,
                        decoration: InputDecoration(
                            labelText: "Date",
                            hintText: "Enter a date",
                            prefixIcon: Icon(Icons.calendar_today),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(color: Colors.grey[300]),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(20.0)))),
                      onChanged: (text) {
                            globals.date = text;
                          })),
                  // question 4
                  Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 20, vertical: 10),
                      child: TextField(
                        textAlign: TextAlign.center,
                        decoration: InputDecoration(
                            labelText: "Time",
                            hintText: "Enter a time",
                            prefixIcon: Icon(Icons.timer),
                            border: OutlineInputBorder(
                                borderSide: BorderSide(color: Colors.grey[300]),
                                borderRadius:
                                    BorderRadius.all(Radius.circular(20.0)))),
                      onChanged: (text) {
                            globals.time = text;
                          })),
                  // question 5
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 20, vertical: 10),
                    child: NiceButton(
                      width: 255,
                      elevation: 8.0,
                      radius: 52.0,
                      icon: Icons.image,
                      text: "Upload Image",
                      background: Colors.grey[350],
                      onPressed: () {},
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: NiceButton(
                      width: 255,
                      elevation: 8.0,
                      radius: 52.0,
                      icon: Icons.check,
                      text: "Schedule",
                      background: Colors.green[300],
                      onPressed: () {},
                    ),
                  ),
                ])))));
  }
}
