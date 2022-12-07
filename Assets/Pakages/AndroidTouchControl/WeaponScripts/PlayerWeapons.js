
function Start () {
	// Select the first weapon
	SelectWeapon(0);
}
function Update() {
    if (Input.GetKey (KeyCode.Escape)) {
		Application.Quit();
	}
}

function WeaponGun() {
    SelectWeapon(0);
}

function WeaponRocket() {
    SelectWeapon(1);
}

/*function OnGUI(){
    GUILayout.BeginHorizontal();
    if(GUILayout.Button("Mashine Gun", GUILayout.Width(Screen.height/4), GUILayout.Height(Screen.height/10))){
    SelectWeapon(0);
    }
    if(GUILayout.Button("Rocket Launcher", GUILayout.Width(Screen.height/4), GUILayout.Height(Screen.height/10))){
    SelectWeapon(1);
    }
    GUILayout.EndHorizontal ();
}*/

function SelectWeapon (index : int) {
	for (var i=0;i<transform.childCount;i++)	{
		// Activate the selected weapon
		if (i == index)
			transform.GetChild(i).gameObject.SetActiveRecursively(true);
		// Deactivate all other weapons
		else
			transform.GetChild(i).gameObject.SetActiveRecursively(false);
	}
}