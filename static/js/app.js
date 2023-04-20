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
            one_stop = [
                        // 1st route---->
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"IndiGo" ,paths:['CCU --> NAG --> BLR',
                                                                                                        'CCU --> PNQ --> BLR',
                                                                                                        'CCU --> HYD --> BLR',
                                                                                                        'CCU --> MAA --> BLR',
                                                                                                        'CCU --> BBI --> BLR',
                                                                                                        'CCU --> PAT --> BLR',
                                                                                                        'CCU --> GAU --> BLR',
                                                                                                        'CCU --> VTZ --> BLR',
                                                                                                        'CCU --> IXA --> BLR',
                                                                                                        'CCU --> BOM --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Air India" ,paths:['CCU --> HYD --> BLR',
                                                                                                            'CCU --> BOM --> BLR',
                                                                                                            'CCU --> MAA --> BLR',
                                                                                                            'CCU --> BBI --> BLR',
                                                                                                            'CCU --> DEL --> BLR',
                                                                                                            'CCU --> GAU --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Jet Airways" ,paths:['CCU --> BOM --> BLR',
                                                                                                            'CCU --> DEL --> BLR',
                                                                                                            'CCU --> GAU --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"SpiceJet" ,paths:['CCU --> MAA --> BLR',
                                                                                                        'CCU --> IXB --> BLR',
                                                                                                        'CCU --> PNQ --> BLR',
                                                                                                        'CCU --> KNU --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Multiple carriers" ,paths:[]
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"GoAir" ,paths:['CCU --> BOM --> BLR',
                                                                                                        'CCU --> AMD --> BLR',
                                                                                                        'CCU --> HYD --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Vistara" ,paths:['CCU --> DEL --> BLR']
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Vistara Premium economy" ,paths:[]
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Jet Airways Business" ,paths:[]
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Multiple carriers Premium economy" ,paths:[]
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Trujet" ,paths:[]
                            },
                        {source:"Kolkata", destination:"Banglore", duration: 215, airline:"Air Asia" ,paths:['CCU --> DEL --> BLR',
                                                                                                        'CCU --> BBI --> BLR']
                            },
                        

                        // 2nd route---->
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"IndiGo", paths:['BLR --> NAG --> DEL',
                                                                                                        'BLR --> HYD --> DEL',
                                                                                                        'BLR --> LKO --> DEL',
                                                                                                        'BLR --> BOM --> DEL',
                                                                                                        'BLR --> IDR --> DEL',
                                                                                                        'BLR --> GOI --> DEL',
                                                                                                        'BLR --> MAA --> DEL',
                                                                                                        'BLR --> STV --> DEL',
                                                                                                        'BLR --> AMD --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Air India", paths:['BLR --> COK --> DEL',
                                                                                                            'BLR --> BOM --> DEL',
                                                                                                            'BLR --> MAA --> DEL',
                                                                                                            'BLR --> CCU --> DEL',
                                                                                                            'BLR --> HYD --> DEL',
                                                                                                            'BLR --> AMD --> DEL',
                                                                                                            'BLR --> VGA --> DEL',
                                                                                                            'BLR --> BBI --> DEL',
                                                                                                            'BLR --> GAU --> DEL',
                                                                                                            'BLR --> GOI --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Jet Airways", paths:['BLR --> BOM --> DEL',
                                                                                                            'BLR --> MAA --> DEL',
                                                                                                            'BLR --> BDQ --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"SpiceJet", paths:['BLR --> PNQ --> DEL',
                                                                                                        'BLR --> HYD --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Multiple carriers", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"GoAir", paths:['BLR --> GOI --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Vistara", paths:['BLR --> AMD --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Vistara Premium economy", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Jet Airways Business", paths:['BLR --> BOM --> DEL',
                                                                                                                    'BLR --> MAA --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Multiple carriers Premium economy", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Trujet", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 240, airline:"Air Asia", paths:[]
                            },

                        // 3rd route---->
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"IndiGo", paths:['DEL --> LKO --> COK',
                                                                                                    'DEL --> BOM --> COK',
                                                                                                    'DEL --> BLR --> COK',
                                                                                                    'DEL --> MAA --> COK',
                                                                                                    'DEL --> HYD --> COK',
                                                                                                    'DEL --> PNQ --> COK',
                                                                                                    'DEL --> AMD --> COK',
                                                                                                    'DEL --> BBI --> COK',
                                                                                                    'DEL --> TRV --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Air India", paths:['DEL --> BLR --> COK',
                                                                                                        'DEL --> MAA --> COK',
                                                                                                        'DEL --> BOM --> COK',
                                                                                                        'DEL --> TRV --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Jet Airways", paths:['DEL --> BOM --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"SpiceJet", paths:['DEL --> PNQ --> COK',
                                                                                                        'DEL --> MAA --> COK',
                                                                                                        'DEL --> BLR --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Multiple carriers", paths:['DEL --> BOM --> COK',
                                                                                                                'DEL --> HYD --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"GoAir", paths:['DEL --> BOM --> COK',
                                                                                                    'DEL --> AMD --> COK',
                                                                                                    'DEL --> HYD --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Vistara", paths:[]
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Vistara Premium economy", paths:[]
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Jet Airways Business", paths:[]
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Multiple carriers Premium economy", paths:['DEL --> BOM --> COK']
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Trujet", paths:[]
                            },
                        {source:"Delhi", destination:"Cochin", duration: 265,airline:"Air Asia", paths:['DEL --> BLR --> COK']
                            },

                        // 4th route---->
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"IndiGo", paths:['BOM --> GOI --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Air India", paths:['BOM --> DEL --> HYD',
                                                                                                            'BOM --> CCU --> HYD',
                                                                                                            'BOM --> MAA --> HYD',
                                                                                                            'BOM --> BLR --> HYD',
                                                                                                            'BOM --> BBI --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Jet Airways", paths:['BOM --> DEL --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"SpiceJet", paths:['BOM --> JLR --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Multiple carriers", paths:[]
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"GoAir", paths:[]
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Vistara", paths:['BOM --> DEL --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Vistara Premium economy", paths:[]
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Jet Airways Business", paths:[]
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Multiple carriers Premium economy", paths:[]
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Trujet", paths:['BOM --> NDC --> HYD']
                            },
                        {source:"Mumbai", destination:"Hyderabad", duration: 195, airline:"Air Asia", paths:[]
                            }
                    ]

            two_stops = [   
                            // 1st route---->
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"IndiGo", paths:['CCU --> RPR --> HYD --> BLR']
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Air India", paths:['CCU --> IXR --> BBI --> BLR',
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
                                                                                                                'CCU --> DEL --> VGA --> BLR',
                                                                                                                'CCU --> BOM --> TRV --> BLR',
                                                                                                                'CCU --> BOM --> HBX --> BLR',
                                                                                                                'CCU --> IXZ --> MAA --> BLR',
                                                                                                                'CCU --> IXB --> DEL --> BLR']
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Jet Airways", paths:['CCU --> BOM --> PNQ --> BLR']
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"SpiceJet", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"GoAir", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Vistara", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Trujet", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 335, airline:"Air Asia", paths:['CCU --> IXR --> DEL --> BLR']
                                },

                            // 2nd route---->
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"IndiGo", paths:['DEL --> HYD --> MAA --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Air India", paths:['DEL --> AMD --> BOM --> COK',
                                                                                                            'DEL --> CCU --> BOM --> COK',
                                                                                                            'DEL --> BHO --> BOM --> COK',
                                                                                                            'DEL --> JDH --> BOM --> COK',
                                                                                                            'DEL --> GOI --> BOM --> COK',
                                                                                                            'DEL --> UDR --> BOM --> COK',
                                                                                                            'DEL --> HYD --> MAA --> COK',
                                                                                                            'DEL --> JAI --> BOM --> COK',
                                                                                                            'DEL --> HYD --> BOM --> COK',
                                                                                                            'DEL --> NAG --> BOM --> COK',
                                                                                                            'DEL --> LKO --> BOM --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Jet Airways", paths:['DEL --> LKO --> BOM --> COK',
                                                                                                                'DEL --> IDR --> BOM --> COK',
                                                                                                                'DEL --> NAG --> BOM --> COK',
                                                                                                                'DEL --> AMD --> BOM --> COK',
                                                                                                                'DEL --> JAI --> BOM --> COK',
                                                                                                                'DEL --> ATQ --> BOM --> COK',
                                                                                                                'DEL --> BDQ --> BOM --> COK',
                                                                                                                'DEL --> JDH --> BOM --> COK',
                                                                                                                'DEL --> UDR --> BOM --> COK',
                                                                                                                'DEL --> BHO --> BOM --> COK',
                                                                                                                'DEL --> DED --> BOM --> COK',
                                                                                                                'DEL --> MAA --> BOM --> COK',
                                                                                                                'DEL --> IXC --> BOM --> COK',
                                                                                                                'DEL --> CCU --> BOM --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"SpiceJet", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Multiple carriers", paths:['DEL --> IXU --> BOM --> COK',
                                                                                                                    'DEL --> IDR --> BOM --> COK',
                                                                                                                    'DEL --> HYD --> MAA --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"GoAir", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Vistara", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Jet Airways Business", paths:['DEL --> ATQ --> BOM --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Trujet", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 425, airline:"Air Asia", paths:[]
                                },

                            // 3rd route---->
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"IndiGo", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Air India", paths:['BLR --> BOM --> AMD --> DEL',
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
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Jet Airways", paths:['BLR --> BOM --> JDH --> DEL']
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"SpiceJet", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"GoAir", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Vistara", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Trujet", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 420, airline:"Air Asia", paths:[]
                                },

                            // 4th route---->
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"IndiGo", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Air India", paths:['BOM --> JDH --> DEL --> HYD',
                                                                                                                'BOM --> AMD --> ISK --> HYD',
                                                                                                                'BOM --> BHO --> DEL --> HYD',
                                                                                                                'BOM --> COK --> MAA --> HYD',
                                                                                                                'BOM --> GOI --> PNQ --> HYD',
                                                                                                                'BOM --> RPR --> VTZ --> HYD',
                                                                                                                'BOM --> IDR --> DEL --> HYD',
                                                                                                                'BOM --> JAI --> DEL --> HYD']
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Jet Airways", paths:['BOM --> DED --> DEL --> HYD',
                                                                                                                    'BOM --> BDQ --> DEL --> HYD',
                                                                                                                    'BOM --> UDR --> DEL --> HYD',
                                                                                                                    'BOM --> JDH --> DEL --> HYD',
                                                                                                                    'BOM --> IDR --> DEL --> HYD',
                                                                                                                    'BOM --> VNS --> DEL --> HYD']
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"SpiceJet", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"GoAir", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Vistara", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Trujet", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 150, airline:"Air Asia", paths:[]
                                },

                        ]

            three_stops = [ 
                            // 1st route---->
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"IndiGo", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Air India", paths:['DEL --> RPR --> NAG --> BOM --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Jet Airways", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"SpiceJet", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Multiple carriers", paths:['DEL --> GWL --> IDR --> BOM --> COK']
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"GoAir", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Vistara", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Trujet", paths:[]
                                },
                            {source:"Delhi", destination:"Cochin", duration: 565, airline:"Air Asia", paths:[]
                                },

                            // 2nd route---->
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"IndiGo", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Air India", paths:['CCU --> BBI --> IXR --> DEL --> BLR',
                                                                                                                'CCU --> DEL --> COK --> TRV --> BLR',
                                                                                                                'CCU --> GAU --> IMF --> DEL --> BLR']
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Jet Airways", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"SpiceJet", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"GoAir", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Vistara", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Trujet", paths:[]
                                },
                            {source:"Kolkata", destination:"Banglore", duration: 805, airline:"Air Asia", paths:[]
                                },


                            // 3rd route---->
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"IndiGo", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Air India", paths:['BLR -->CCU --> BBI --> HYD --> DEL',
                                                                                                                'BLR -->BOM --> IDR --> GWL --> DEL',
                                                                                                                'BLR -->HBX --> BOM --> BHO --> DEL',
                                                                                                                'BLR -->HBX --> BOM --> AMD --> DEL',
                                                                                                                'BLR -->HBX --> BOM --> NAG --> DEL']
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Jet Airways", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"SpiceJet", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"GoAir", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Vistara", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Trujet", paths:[]
                                },
                            {source:"Banglore", destination:"Delhi", duration: 685, airline:"Air Asia", paths:[]
                                },


                            // 4th route---->
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"IndiGo", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Air India", paths:['BOM -->JDH --> JAI --> DEL --> HYD',
                                                                                                                'BOM -->BLR --> CCU --> BBI --> HYD']
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Jet Airways", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"SpiceJet", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Multiple carriers", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"GoAir", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Vistara", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Vistara Premium economy", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Jet Airways Business", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Multiple carriers Premium economy", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Trujet", paths:[]
                                },
                            {source:"Mumbai", destination:"Hyderabad", duration: 1175, airline:"Air Asia", paths:[]
                                }

                        ]    

            four_stops = [
                        // 1st route---->
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"IndiGo", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Air India",paths:['BLR --> CCU --> BBI --> HYD -->VGA --> DEL']
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Jet Airways", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"SpiceJet", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Multiple carriers", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"GoAir", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Vistara", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Vistara Premium economy", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Jet Airways Business", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Multiple carriers Premium economy", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Trujet", paths:[]
                            },
                        {source:"Banglore", destination:"Delhi", duration: 1170, airline:"Air Asia", paths:[]
                            },

                        ]

                         getTime();

            function getTime()
            {
                var src=document.getElementById("Source").value;
                var dst=document.getElementById("Destination").value;
                var stops=document.getElementById("Stops").value;
                var airline=document.getElementById("airline").value;
                
                if(stops==="0")
                {
                    function getDuration(source, destination) {
                            const entry = non_stop.find(entry => entry.source === source && entry.destination === destination);
                            if (entry && entry.paths.length >0) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                               paths=[]
                               paths.push("This airline does not operate on this route ")
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
                }

                if(stops==="1")
                {
                    function getDuration(source, destination) {
                            const entry = one_stop.find(entry => entry.source === source && entry.destination === destination && entry.airline == airline);
                            if (entry && entry.paths.length >0) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                               paths=[]
paths.push("This airline does not operate on this route ")
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="2")
                {
                    function getDuration(source, destination) {
                            const entry = two_stops.find(entry => entry.source === source && entry.destination === destination && entry.airline == airline);
                            if (entry && entry.paths.length >0) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                               paths=[]
paths.push("This airline does not operate on this route ")
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="3")
                {
                    function getDuration(source, destination) {
                            const entry = three_stops.find(entry => entry.source === source && entry.destination === destination && entry.airline == airline);
                            if (entry && entry.paths.length >0) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                               paths=[]
paths.push("This airline does not operate on this route ")
                            }
                        }

                        var time=(getDuration(src,dst));
                        console.log(time);
           
                }

                if(stops==="4")
                {
                    function getDuration(source, destination) {
                            const entry = four_stops.find(entry => entry.source === source && entry.destination === destination && entry.airline == airline);
                            if (entry && entry.paths.length >0) {
                                paths=[]
                                paths=entry.paths;
                                return entry.duration;
                            } else {
                               
                               paths=[]
paths.push("This airline does not operate on this route ")
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
                        document.getElementById("sub").disabled=true;
                    }
                    if(time==="No entry found")
                    {
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
