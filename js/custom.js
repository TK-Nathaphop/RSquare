/**
 * struct of building
 * {
 *  buildingName: string
 *  buildingImage: sting(filename)
 *  floor:[]
 * }
 * struct of floor
 * {
 *  floorName: string
 *  floorBlueprint: sting(filename)
 *  place:[]
 * }
 * struct of place
 * {
 *  placeName: string
 *  placeCapacity: string
 *  placeDrumUsage: boolean
 *  placeProjector: boolean
 *  placeMicrophone: boolean
 *  placeSpeaker: boolean
 * }
 */

//Start init

//add building
var happenFloor,happenPlace
const building = [];

building.push({
  buildingName: "Dummy building",
  buildingImage: "",
  floor: []
});

//add floor
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.push({
    floorName: "Dummy floor",
    floorBlueprint: "",
    place: []
  });

//add place
building
  .find(el => el.buildingName === building[0].buildingName)
  .floor.find(el1 => el1.floorName === building[0].floor[0].floorName)
  .place.push({
    placeName: "Dummy place",
    placeCapacity: "50",
    placeDrumUsage: true,
    placeProjector: true,
    placeMicrophone: true,
    placeSpeaker: true
  });

console.log(building);
//end init

//function for pushFloor
function pushFloor(
  floorName,
  floorBlueprint
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.push({
      floorName: floorName,
      floorBlueprint: floorBlueprint,
      place: []
    });
}

//function for pushPlace
function pushPlace(
  placeName,
  placeCapacity,
  placeDrumUsage,
  placeProjector,
  placeMicrophone,
  placeSpeaker
) {
  building
    .find(el => el.buildingName === building[0].buildingName)
    .floor.find(el1 => el1.floorName === building[0].floor[0].floorName)
    .place.push({
      placeName: placeName,
      placeCapacity: placeCapacity,
      placeDrumUsage: placeDrumUsage,
      placeProjector: placeProjector,
      placeMicrophone: placeMicrophone,
      placeSpeaker: placeSpeaker
    });
}

$(document).on("click", ".browse-building", function () {
  $("#img-building").click();
  $("#img-building").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-building").val(fileName);
  });
});

$(document).on("click", ".browse-blueprint", function () {
  $("#img-blueprint").click();
  $("#img-blueprint").change(function (e) {
    var fileName = e.target.files[0].name;
    $("#file-blueprint").val(fileName);
  });
});

function DrumUsage(F0P0, itsFloor, itsPlace) {
  var DrumUsage = "#DrumUsage" + F0P0;
  if ($("DrumUsageF0P0").prop("checked") === true) $("DrumUsageF0P0").val("1");
  else $("DrumUsageF0P0").val("0");
  // console.log($("DrumUsageF0P0").val())
}

function Projector(F0P0, itsFloor, itsPlace) {
  var Projector = "#Projector" + F0P0;
  if ($(Projector).prop("checked") === true) $(Projector).val("1");
  else $(Projector).val("0");
  // console.log($(Projector).val())
}

function Microphone(F0P0, itsFloor, itsPlace) {
  var Microphone = "#Microphone" + F0P0;
  if ($(Microphone).prop("checked") === true) $(Microphone).val("1");
  else $(Microphone).val("0");
  // console.log($(Microphone).val())
}

function Speaker(F0P0, itsFloor, itsPlace) {
  var Speaker = "#Speaker" + F0P0;
  if ($(Speaker).prop("checked") === true) $(Speaker).val("1");
  else $(Speaker).val("0");
  // console.log($(Speaker).val())
}

function save_detail(F0P0, itsFloor, itsPlace) {
  var Place_Name = "#Place_Name" + F0P0;
  var up_save_h5 = "#h5" + F0P0;
  // console.log($("#Place-NameF0P0").val());
  if ($(Place_Name).val() == "") $(up_save_h5).text("Dummy place");
  else $(up_save_h5).text($(Place_Name).val());
}

function delete_detail(F0P0, itsFloor, itsPlace) {

}

function View_Details(F0P0, itsFloor, itsPlace) {
  let my_add_place;
  const curPlaces = building[0].floor[itsFloor].place[itsPlace]
  console.log('view curplace', curPlaces)
  console.log('view detail', F0P0, itsFloor, itsPlace)
  // console.log(F0P0)
  // alert("View_Details" + F0P0)
  my_add_place = "#add_placeF" + itsFloor;
  $("#save").css({
    display: "block"
  });
  $("#delete_place").css({
    display: "block"
  });
  $(my_add_place).css({
    display: "none"
  });
  $("#ModalTitleF0P0").text("Edit Place");
  $('#Place_NameF0P0').val(curPlaces.placeName)
  $('#CapacityF0P0').val(curPlaces.placeCapacity)
  $("#DrumUsageF0P0").prop("checked", curPlaces.placeDrumUsage)
  $("#ProjectorF0P0").prop("checked", curPlaces.placeProjector)
  $("#MicrophoneF0P0").prop("checked", curPlaces.placeMicrophone)
  $("#SpeakerF0P0").prop("checked", curPlaces.placeSpeaker)
}

function add_place(floor) {
  pushPlace(
    $("#Place_NameF0P0").val(),
    $("#CapacityF0P0").val(),
    $("#DrumUsageF0P0").prop("checked"),
    $("#ProjectorF0P0").prop("checked"),
    $("#MicrophoneF0P0").prop("checked"),
    $("#SpeakerF0P0").prop("checked")
  );
  // const buildingName =
  const currentFloor = building[0].floor[floor];
  const curPlaces = currentFloor.place;
  console.log("current floor", currentFloor);
  console.log("places", curPlaces);
  // let place_h5, place_View_Detail, place_onclick;

  $('#place').html('')

  curPlaces.forEach((e, i) => {
    console.log('e ->', e)

    $('#place').append(
      `<div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
            <h5 id = "h5F${floor}P${i}">${e.placeName}</h5>
          </div>
          <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <a href = "#"
            onclick = "${`View_Details('F${floor}P${i}','${floor}','${i}')`}"
            id = "View_DetailsF${floor}P${i}" >
              <span class="dark-blue" data-toggle="modal"
                data-target="#add_place_popup_F0">View details</span>
            </a>
          </div>
        </div>`
    )
  });
  check_Update();
}

function add_place_popup_btn(floor) {
  $("#ModalTitleF0P0").text("Add Place");
  my_add_place = "#add_placeF" + floor;
  $(my_add_place).css({
    display: "block"
  });
  $("#delete_place").css({
    display: "none"
  });
  $("#save").css({
    display: "none"
  });
}

function add_floor() {
  const currentFloor = building[0].floor.length;
  const curPlaces = currentFloor.place;
  console.log("current floor", currentFloor);
  console.log("places", curPlaces);
  // alert("This is floor ");
  $("#floor-template").append(
    `<div class="row nothing" id="deleteFloor${currentFloor}">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="row shadow p-3 mb-3 bg-white rounded">
            <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <div class="form-group">
                    <label for="Floor${currentFloor}"><span class="dark-blue"><b>Floor</b></span></label>
                    <input type="text" class="form-control" id="Floor${currentFloor}" placeholder="Floor G" name="Floor${currentFloor}"/>
                </div>
                <div class="form-group">
                    <input type="file" id="img-blueprint" name="img[]" class="file" accept="image/*" />
                    <label for="Blueprint"><span class="dark-blue"><b>Blueprint</b></span></label>
                    <div class="input-group">
                        <input type="text" class="form-control" disabled placeholder="Upload File"
                            id="file-blueprint" />
                        <div class="input-group-append">
                            <button type="button" id="btn" class="browse-blueprint btn btn-dark-blue">
                                Browse...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <label for="Place"><span class="dark-blue"><b>Place</b></span></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" id="place">
                        <div class="row">
                            <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                <h5 id="h5F${currentFloor}P0"> Dummy Place </h5>
                            </div>
                            <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                                <a href="#" onclick="View_Details('F${currentFloor}P0','${currentFloor}','0')" id="View_DetailsF${currentFloor}P0">
                                    <span class="dark-blue" data-toggle="modal" data-target="#add_place_popup_F0">View
                                        details</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <!-- Button trigger modal -->
                        <button onclick="add_place_popup_btn('0')" type="button" class="btn btn-dark-blue"
                            data-toggle="modal" data-target="#add_place_popup_F0" id="add_place_popup_btn_F0">
                            Add Place
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="add_place_popup_F0" tabindex="-1" role="dialog"
                            aria-labelledby="add_place_popup_F0_Title" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title vdark-blue">
                                            <b id="ModalTitleF${currentFloor}P0" style="padding-left: 1px;">Add Place</b>
                                        </h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                    <div class="form-group">
                                                        <label for="Place_NameF${currentFloor}P0"><span class="dark-blue"><b>Place
                                                                    Name</b></span></label>
                                                        <input type="text" class="form-control" id="Place_NameF${currentFloor}P0"
                                                            placeholder="Dummy place" name="Place_NameF${currentFloor}P0" />
                                                    </div>
                                                </div>
                                                <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                                                    <div class="form-group">
                                                        <label for="Capacity"><span
                                                                class="dark-blue"><b>Capacity</b></span></label>
                                                        <input type="text" class="form-control" id="CapacityF${currentFloor}P0"
                                                            placeholder="50" />
                                                    </div>
                                                </div>
                                                <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                                    <div class="form-group">
                                                        <p class="vdark-blue" style="padding-top: 80%;">
                                                            people
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <div class="form-check">
                                                        <input onclick="DrumUsage('F${currentFloor}P0','${currentFloor}','0')"
                                                            class="form-check-input" type="checkbox" value="1"
                                                            id="DrumUsageF${currentFloor}P0" name="DrumUsageF${currentFloor}P0" />
                                                        <label class="form-check-label" for="DrumUsageF${currentFloor}P0">
                                                            Drum Usage
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <div class="form-check">
                                                        <input onclick="Projector('F${currentFloor}P0','${currentFloor}','0')"
                                                            class="form-check-input" type="checkbox" value="1"
                                                            id="ProjectorF${currentFloor}P0" name="ProjectorF${currentFloor}P0" />
                                                        <label class="form-check-label" for="ProjectorF${currentFloor}P0">
                                                            Projector
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <div class="form-check">
                                                        <input onclick="Microphone('F${currentFloor}P0','${currentFloor}','0')"
                                                            class="form-check-input" type="checkbox" value="1"
                                                            id="MicrophoneF${currentFloor}P0" name="MicrophoneF${currentFloor}P0" />
                                                        <label class="form-check-label" for="MicrophoneF${currentFloor}P0">
                                                            Microphone
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                    <div class="form-check">
                                                        <input onclick="Speaker('F${currentFloor}P0','${currentFloor}','0')"
                                                            class="form-check-input" type="checkbox" value="1"
                                                            id="SpeakerF${currentFloor}P0" name="SpeakerF${currentFloor}P0" />
                                                        <label class="form-check-label" for="SpeakerF${currentFloor}P0">
                                                            Speaker
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button onclick="add_place('0')" type="button" class="btn btn-dark-blue"
                                            id="add_placeF0" data-dismiss="modal" style="display: block;">
                                            <span id="add_place_text_F0">Add</span>
                                        </button>
                                        <button onclick="save_detail('F${currentFloor}P0','${currentFloor}','0')" type="button"
                                            class="btn btn-dark-blue" id="save" data-dismiss="modal"
                                            style="display: block;">
                                            <span id="add_place_text_F0">Save</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                <button type="button" onclick="deleteFloor${currentFloor}()" class="close" name="deleteFloor${currentFloor}" data-dismiss="modal"
                    aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    <script>
                        function deleteFloor${currentFloor}() {
                            alert("Hello");
                            $("div").remove("#deleteFloor${currentFloor}");
                        }
                    </script>
                </button>
            </div>
        </div>
    </div>
</div>`
  );
}

// $(document).on("click", "#add_floor", function () {
//   alert("This is floor ");
//   $("#floor-template").append(
//     '<div class="row nothing" id="deleteFloor1"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <div class="row shadow p-3 mb-3 bg-white rounded"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"> <div class="form-group"> <label for="Floor" ><span class="vdark-blue"><b>Floor</b></span></label > <input type="text" class="form-control" id="Floor" placeholder="Floor G" /> </div> <div class="form-group"> <input type="file" id="img-blueprint" name="img[]" class="file" accept="image/*" /> <label for="Blueprint" ><span class="vdark-blue"><b>Blueprint</b></span></label > <div class="input-group"> <input type="text" class="form-control" disabled placeholder="Upload File" id="file-blueprint" /> <div class="input-group-append"> <button type="button" id="btn" class="browse-blueprint btn btn-primary" > Browse... </button> </div> </div> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5"> <label for="Place" ><span class="vdark-blue"><b>Place</b></span></label > <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"> <h5>Dummy Place</h5> </div> <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7"> <a href="#"><span>View details</span></a> </div> </div> <div class="row"> <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" > <!-- Button trigger modal --> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add_place" > Add Place </button> <!-- Modal --> <div class="modal fade" id="add_place" tabindex="-1" role="dialog" aria-labelledby="add_placeTitle" aria-hidden="true" > <div class="modal-dialog modal-dialog-centered" role="document" > <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title vdark-blue" id="exampleModalLongTitle" > <b>Add Place</b> </h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <div class="container-fluid"> <div class="row"> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Place-Name" ><span class="vdark-blue" ><b>Place Name</b></span ></label > <input type="text" class="form-control" id="Place-Name" placeholder="DUMMY ROOM 3" /> </div> </div> <div class="col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5" > <div class="form-group"> <label for="Capacity" ><span class="vdark-blue" ><b>Capacity</b></span ></label > <input type="text" class="form-control" id="Capacity" placeholder="50" /> </div> </div> <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" > <div class="form-group"> <p class="vdark-blue" style="padding-top: 80%;" > people </p> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Drum_Usage" /> <label class="form-check-label" for="Drum Usage" > Drum Usage </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Projector" /> <label class="form-check-label" for="Projector" > Projector </label> </div> </div> </div> <div class="row"> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Microphone" /> <label class="form-check-label" for="Microphone" > Microphone </label> </div> </div> <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6" > <div class="form-check"> <input class="form-check-input" type="checkbox" value="" id="Speaker" /> <label class="form-check-label" for="Speaker" > Speaker </label> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-secondary" data-dismiss="modal" > Close </button> <button type="button" class="btn btn-primary"> Add </button> </div> </div> </div> </div> </div> </div> </div> <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"> <button type="button" onclick="deleteFloor1()" class="close" name="deleteFloor1" data-dismiss="modal" aria-label="Close" > <span aria-hidden="true">&times;</span> <script> function deleteFloor1() { alert("Hello"); $("div").remove("#deleteFloor1"); } </script> </button> </div> </div> </div> </div> '
//   );
// });

$(document).on("click", "#delete-floor", function () {
  $("div").remove(".nothing");
});

function check_Update() {
  // building.forEach((element_building, index_building) => {
  //   console.log("Element", element_building)
  //   console.log("myindex", index_building)
  //   element_building.floor.forEach((element_floor, index_floor) => {
  //     console.log("Element", element_floor)
  //     console.log("myindex", index_floor)
  //   })
  // })
  // building.forEach(function (element_building, index_building) {
  //   console.log("Element", element_building)
  //   console.log("myindex", index_building)
  //   element_building.floor.forEach(function (element_floor, index_floor) {
  //     console.log("Element", element_floor)
  //     console.log("myindex", index_floor)
  //   })
  // })
}