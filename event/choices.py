class EntryType:
    COUPLE = "COUPLE"
    SINGLE = "SINGLE"
    FAMILY = "FAMILY"
    entryChoices = (
        (COUPLE, "Couple"),
        (FAMILY, "Family"),
        (SINGLE, "Single")
    )

class ImageType:
    DISPLAY="DISPLAY"
    NORMAL="NORMAL"
    imageTypeChoices=(
        (DISPLAY,"Display"),
        (NORMAL,"Normal")
    )

class AmenityType:
    RAILWAYSTATION="RAILWAYSTATION"
    METROSTATION="METROSTATION"
    AIRPORT="AIRPORT"
    HOTEL="HOTEL"
    NONE="NONE"
    amenityTypeChoices=(
        (RAILWAYSTATION,"Railway Station"),
        (METROSTATION,"Metro Station"),
        (HOTEL,"Hotel"),
        (NONE,"None")
    )
    googleMapingChoices=(
        (RAILWAYSTATION,"train_station"),
        (METROSTATION,"subway_station"),
        (HOTEL,"lodging"),
    )
    distanceBasedList=[METROSTATION,RAILWAYSTATION]

class SearchDistanceFactor:
    DISTANCE="DISTANCE"
    RATING="RATING"
    SearchDistanceChoices=(
        (DISTANCE,"Distance"),
        (RATING,"Rating")
    )
