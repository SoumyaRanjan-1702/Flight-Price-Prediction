            paths=[]
            non_stop = [{source:"Banglore",destination:"Delhi",duration: 155,paths:['BLR --> DEL']
                            },
                        {source:"Kolkata",destination:"Banglore",duration: 140,paths:['CCU --> BLR']
                            },
                        {source:"Chennai",destination:"Kolkata",duration: 135,paths:['MAA --> CCU']
                            },
                        {source:"Delhi",destination:"Cochin",duration: 170,paths:['DEL --> COK']
                            },
                        {source:"Mumbai",destination:"Hyderabad",duration: 75,paths:['BOM --> HYD']
                            }
                       ]
            
            one_stop = [{source:"Kolkata",destination:"Banglore",duration: 215,paths:[
                                                                                    'CCU --> NAG --> BLR',
                                                                                    'CCU --> BOM --> BLR',
                                                                                    'CCU --> MAA --> BLR',
                                                                                    'CCU --> HYD --> BLR',
                                                                                    'CCU --> DEL --> BLR',
                                                                                    'CCU --> BBI --> BLR',
                                                                                    'CCU --> IXB --> BLR',
                                                                                    'CCU --> PNQ --> BLR',
                                                                                    'CCU --> GAU --> BLR',
                                                                                    'CCU --> AMD --> BLR',
                                                                                    'CCU --> PAT --> BLR',
                                                                                    'CCU --> KNU --> BLR',
                                                                                    'CCU --> VTZ --> BLR',
                                                                                    'CCU --> IXA --> BLR']
                            },
                        {source:"Banglore",destination:"Delhi",duration: 240,paths:['BLR --> NAG --> DEL',
                                                                                    'BLR --> BOM --> DEL',
                                                                                    'BLR --> COK --> DEL',
                                                                                    'BLR --> MAA --> DEL',
                                                                                    'BLR --> HYD --> DEL',
                                                                                    'BLR --> CCU --> DEL',
                                                                                    'BLR --> PNQ --> DEL',
                                                                                    'BLR --> LKO --> DEL',
                                                                                    'BLR --> AMD --> DEL',
                                                                                    'BLR --> VGA --> DEL',
                                                                                    'BLR --> BBI --> DEL',
                                                                                    'BLR --> GOI --> DEL',
                                                                                    'BLR --> GAU --> DEL',
                                                                                    'BLR --> BDQ --> DEL',
                                                                                    'BLR --> IDR --> DEL',
                                                                                    'BLR --> STV --> DEL']
                            },
                        {source:"Delhi",destination:"Cochin",duration: 265,paths:['DEL --> BOM --> COK',
                                                                                  'DEL --> BLR --> COK',
                                                                                  'DEL --> PNQ --> COK',
                                                                                  'DEL --> LKO --> COK',
                                                                                  'DEL --> HYD --> COK',
                                                                                  'DEL --> MAA --> COK',
                                                                                  'DEL --> TRV --> COK',
                                                                                  'DEL --> AMD --> COK',
                                                                                  'DEL --> BBI --> COK']
                            },
                        {source:"Mumbai",destination:"Hyderabad",duration: 195,paths:['BOM --> DEL --> HYD',
                                                                                      'BOM --> GOI --> HYD',
                                                                                      'BOM --> JLR --> HYD',
                                                                                      'BOM --> NDC --> HYD',
                                                                                      'BOM --> CCU --> HYD',
                                                                                      'BOM --> MAA --> HYD',
                                                                                      'BOM --> BLR --> HYD',
                                                                                      'BOM --> BBI --> HYD']
                            }
                       ]

            two_stops = [{source:"Kolkata",destination:"Banglore",duration: 335,paths:['CCU --> IXR --> BBI --> BLR',
                                                                                       'CCU --> GAU --> DEL --> BLR',
                                                                                       'CCU --> BBI --> BOM --> BLR',
                                                                                       'CCU --> JAI --> BOM --> BLR',
                                                                                       'CCU --> IXR --> DEL --> BLR',
                                                                                       'CCU --> BOM --> COK --> BLR',
                                                                                       'CCU --> BOM --> GOI --> BLR',
                                                                                       'CCU --> DEL --> AMD --> BLR',
                                                                                       'CCU --> DEL --> COK --> BLR',
                                                                                       'CCU --> BOM --> AMD --> BLR',
                                                                                       'CCU --> JAI --> DEL --> BLR',
                                                                                       'CCU --> VNS --> DEL --> BLR',
                                                                                       'CCU --> BBI --> HYD --> BLR',
                                                                                       'CCU --> BOM --> PNQ --> BLR',
                                                                                       'CCU --> RPR --> HYD --> BLR',
                                                                                       'CCU --> DEL --> VGA --> BLR',
                                                                                       'CCU --> BOM --> TRV --> BLR',
                                                                                       'CCU --> BOM --> HBX --> BLR',
                                                                                       'CCU --> IXZ --> MAA --> BLR',
                                                                                       'CCU --> IXB --> DEL --> BLR']
                            },
                        {source:"Delhi",destination:"Cochin",duration: 425,paths:['DEL --> LKO --> BOM --> COK',
                                                                                  'DEL --> AMD --> BOM --> COK',
                                                                                  'DEL --> CCU --> BOM --> COK',
                                                                                  'DEL --> IDR --> BOM --> COK',
                                                                                  'DEL --> NAG --> BOM --> COK',
                                                                                  'DEL --> BHO --> BOM --> COK',
                                                                                  'DEL --> JAI --> BOM --> COK',
                                                                                  'DEL --> ATQ --> BOM --> COK',
                                                                                  'DEL --> JDH --> BOM --> COK',
                                                                                  'DEL --> GOI --> BOM --> COK',
                                                                                  'DEL --> BDQ --> BOM --> COK',
                                                                                  'DEL --> IXU --> BOM --> COK',
                                                                                  'DEL --> UDR --> BOM --> COK',
                                                                                  'DEL --> HYD --> MAA --> COK',
                                                                                  'DEL --> HYD --> BOM --> COK',
                                                                                  'DEL --> DED --> BOM --> COK',
                                                                                  'DEL --> MAA --> BOM --> COK',
                                                                                  'DEL --> IXC --> BOM --> COK']
                            },
                        {source:"Banglore",destination:"Delhi",duration: 420,paths:['BLR --> BOM --> AMD --> DEL',
                                                                                    'BLR --> BOM --> JDH --> DEL',
                                                                                    'BLR --> CCU --> GAU --> DEL',
                                                                                    'BLR --> BOM --> BHO --> DEL',
                                                                                    'BLR --> BOM --> IDR --> DEL',
                                                                                    'BLR --> CCU --> BBI --> DEL',
                                                                                    'BLR --> BOM --> NAG --> DEL',
                                                                                    'BLR --> HYD --> VGA --> DEL',
                                                                                    'BLR --> VGA --> HYD --> DEL',
                                                                                    'BLR --> TRV --> COK --> DEL',
                                                                                    'BLR --> BOM --> UDR --> DEL',
                                                                                    'BLR --> VGA --> VTZ --> DEL',
                                                                                    'BLR --> BOM --> IXC --> DEL']
                            },
                        {source:"Mumbai",destination:"Hyderabad",duration: 150,paths:['BOM --> JDH --> DEL --> HYD',
                                                                                      'BOM --> AMD --> ISK --> HYD',
                                                                                      'BOM --> DED --> DEL --> HYD',
                                                                                      'BOM --> BHO --> DEL --> HYD',
                                                                                      'BOM --> COK --> MAA --> HYD',
                                                                                      'BOM --> BDQ --> DEL --> HYD',
                                                                                      'BOM --> GOI --> PNQ --> HYD',
                                                                                      'BOM --> UDR --> DEL --> HYD',
                                                                                      'BOM --> RPR --> VTZ --> HYD',
                                                                                      'BOM --> IDR --> DEL --> HYD',
                                                                                      'BOM --> JAI --> DEL --> HYD',
                                                                                      'BOM --> VNS --> DEL --> HYD',]
                            }
                        ]

            three_stops = [{source:"Delhi",destination:"Cochin",duration: 565,paths:['DEL --> RPR --> NAG --> BOM --> COK',
                                                                                     'DEL --> GWL --> IDR --> BOM --> COK']
                                },
                        {source:"Kolkata",destination:"Banglore",duration: 805,paths:['CCU --> BBI --> IXR --> DEL --> BLR',
                                                                                      'CCU --> DEL --> COK --> TRV --> BLR',
                                                                                      'CCU --> GAU --> IMF --> DEL --> BLR']
                            },
                        {source:"Banglore",destination:"Delhi",duration: 685,paths:['BLR -->CCU --> BBI --> HYD --> DEL',
                                                                                    'BLR -->BOM --> IDR --> GWL --> DEL',
                                                                                    'BLR -->HBX --> BOM --> BHO --> DEL',
                                                                                    'BLR -->HBX --> BOM --> AMD --> DEL',
                                                                                    'BLR -->HBX --> BOM --> NAG --> DEL']
                            },
                        {source:"Mumbai",destination:"Hyderabad",duration: 1175,paths:['BOM -->JDH --> JAI --> DEL --> HYD',
                                                                                       'BOM -->BLR --> CCU --> BBI --> HYD']
                            }
                          ]

            four_stops = [{source:"Banglore",destination:"Delhi",duration: 1170,paths:['BLR --> CCU --> BBI --> HYD -->VGA --> DEL']
                            }
                         ]

                         getTime();

            function getTime()
            {
                var src=document.getElementById("Source").value;
                var dst=document.getElementById("Destination").value;
                var stops=document.getElementById("Stops").value;
                
                if(stops==="0")
                {
                    function getDuration(source, destination) {
                            const entry = non_stop.find(entry => entry.source === source && entry.destination === destination);
                            if (entry) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                                return "No entry found";
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
                }

                if(stops==="1")
                {
                    function getDuration(source, destination) {
                            const entry = one_stop.find(entry => entry.source === source && entry.destination === destination);
                            if (entry) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                                return "No entry found";
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="2")
                {
                    function getDuration(source, destination) {
                            const entry = two_stops.find(entry => entry.source === source && entry.destination === destination);
                            if (entry) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                                return "No entry found";
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="3")
                {
                    function getDuration(source, destination) {
                            const entry = three_stops.find(entry => entry.source === source && entry.destination === destination);
                            if (entry) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                                return "No entry found";
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="4")
                {
                    function getDuration(source, destination) {
                            const entry = four_stops.find(entry => entry.source === source && entry.destination === destination);
                            if (entry) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                                return "No entry found";
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
                }

                  // Get the datetime input values
                    const departureTimeInput = document.getElementById("Dep_Time");
                    const arrivalTimeInput = document.getElementById("Arrival_Time");
                    const departureTime = new Date(departureTimeInput.value);
                    const arrivalTime = new Date(arrivalTimeInput.value);
                    
                    // Calculate the time difference in minutes
                    const timeDiffInMs = arrivalTime.getTime() - departureTime.getTime();
                    const timeDiffInMinutes = Math.round(timeDiffInMs / 60000);
                    var timediff=timeDiffInMinutes;

                    if(timediff<time)
                    {
                        alert("No flight available in the given Duration")
                        document.getElementById("sub").disabled=true;
                    }
                    if(time==="No entry found")
                    {
                        alert("No Flight")
                        document.getElementById("sub").disabled=true;
                    }
                    if(timediff>=time)
                    {
                        document.getElementById("sub").disabled=false;
                    }

                    var output = "";

                    for (var i = 0; i < paths.length; i++) {
                    output += paths[i] + "<br>";
                    }

                    document.getElementById("arrayValues").innerHTML = output;
            }
