class Gender:
    MALE = "MALE"
    FEMALE = "FEMALE"
    NOTDISCLOSED="NOTDISCLOSED"
    genderChoices = (
        (FEMALE, "Female"),
        (MALE, "Male"),
        (NOTDISCLOSED,"Can't disclose")
    )

class UserImageType:
    PROFILE="PROFILE"
    GENERAL="GENERAL"
    imageChoices=(
        (PROFILE, "Profile"),
        (GENERAL, "General")
    )
