import 'package:flutter/material.dart';
import 'dart:math';
import "package:neighbormart/string_extension.dart";
import "package:neighbormart/screens/chat.dart";

class House extends StatefulWidget {
  House({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _HouseState createState() => _HouseState();
}

class _HouseState extends State<House> {
  // generating list of stores
  TextEditingController editingController = TextEditingController();

  final duplicateItems = [
    "Jewel Osco (May 1st)",
    "Jewel Osco (May 3rd)",
    "Walmart (May 3rd)",
    "Jewel Osco (May 2nd)",
    "Aldi (May 1st)",
    "Whole Foods Market (May 2nd)",
    "Trader Joe's (May 1st)",
    "Jewel Osco (May 1st)",
    "Walmart (May 3rd)",
    "Costco (May 2nd)",
    "Jewel Osco (May 3rd)"
  ];
  var subtitles = [
    "Tatiana Blackwell: 0.11 miles away",
    "Erin Romano: 0.15 miles away",
    "Elliot Terrell: 0.16 miles away",
    "Mark Gibbons: 0.19 miles away",
    "Kristian Wainwright: 0.20 miles away",
    "Mario Rios: 0.21 miles away",
    "Andrea Chen: 0.25 miles away",
    "Rudolph Dunn: 0.26 miles away",
    "Anita Horton: 0.28 miles away",
    "Jack Rivera: 0.30 miles away",
    "Siddarth Patel: 0.31 miles away"
  ];
  var images = [
    "images/i1.jpg",
    "images/i2.jpg",
    "images/i3.jpg",
    "images/i4.jpg",
    "images/i5.jpg",
    "images/i6.jpg",
    "images/i7.jpg",
    "images/i8.jpg",
    "images/i9.jpg",
    "images/i10.jpg",
    "images/i11.jpeg"
  ];
  var items = List<String>();
  var subbies = List<String>();
  var imagies = List<String>();

  @override
  void initState() {
    items.addAll(duplicateItems);
    subbies.addAll(subtitles);
    imagies.addAll(images);
    super.initState();
  }

  void filterSearchResults(String query) {
    List<String> dummySearchList = List<String>();
    dummySearchList.addAll(duplicateItems);
    List<String> dummySubtitles = List<String>();
    dummySubtitles.addAll(subtitles);
    List<String> dummyImages = List<String>();
    dummyImages.addAll(images);
    if (query.isNotEmpty) {
      List<String> dummyListData = List<String>();
      dummySearchList.forEach((item) {
        if (item.contains(query.capitalize())) {
          dummyListData.add(item);
          // fix to make it change for everything else
        }
      });
      setState(() {
        items.clear();
        items.addAll(dummyListData);
      });
      return;
    } else {
      setState(() {
        items.clear();
        items.addAll(duplicateItems);
      });
    }
  }

  //final FavoriteWidget fav = FavoriteWidget();
  final textColor = Colors.grey[500]; // color for the descriptions
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.green[300],
          elevation: 0.0,
          title: Text("Neighbor Mart"),
        ),
        body: Container(
            child: Column(
          children: <Widget>[
            Padding(
                padding: EdgeInsets.symmetric(vertical: 20.0, horizontal: 20.0),
                // search box
                child: TextField(
                  onChanged: (value) {
                    filterSearchResults(value);
                  },
                  controller: editingController,
                  decoration: InputDecoration(
                      labelText: "Search",
                      hintText: "Search",
                      prefixIcon: Icon(Icons.search),
                      border: OutlineInputBorder(
                          borderSide: BorderSide(color: Colors.green[300]),
                          borderRadius:
                              BorderRadius.all(Radius.circular(20.0)))),
                )),
            Expanded(
              child: ListView.builder(
                shrinkWrap: true,
                itemCount: items.length,
                itemBuilder: (context, index) {
                  return Card(
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: <Widget>[
                        ListTile(
                          leading: Icon(Icons.account_circle,
                              color: Colors.green[300],
                              size: 36.0),
                          title: Text('${items[index]}'),
                          subtitle: Text('${subtitles[index]}'),
                        ),
                        Image.asset('${images[index]}', fit: BoxFit.cover),
                        ButtonBar(
                          children: <Widget>[
                            FlatButton(
                              child: const Text('REQUEST ITEMS'),
                              onPressed: () {/* ... */},
                            ),
                            FlatButton(
                              child: const Text('OFFER ITEMS'),
                              onPressed: () {/* ... */},
                            ),
                            FlatButton(
                              child: const Text('CHAT'),
                              onPressed: () {
                                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => ChatBox()));
                    },
                            ),
                          ],
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        )));
  }
}
