const fs = require("fs");
const path = require("path");
const $ = require("jquery");
const Swal = require("sweetalert2");

const alertsData = require("../../data/alerts.json");
const eachAlert = alertsData.alerts;
var alertArray = [];

const uniqueAlertsData = require("../../data/uniquejoin.json");
const eachUniqueAlert = uniqueAlertsData.uniqueJoin;
var uniqueArray = [];

var count = 0;

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

$(document).ready(() => {
  $.each(eachAlert, (key) => {
    alertArray.push(key);
  });

  $.each(eachUniqueAlert, (key) => {
    uniqueArray.push(key);
  });

  var checkboxEdit = [
    $("#EditFollowChecked"),
    $("#EditJoinedChecked"),
    $("#EditSubChecked"),
    $("#EditSpellChecked"),
    $("#EditRaidChecked"),
    $("#EditUniqueChecked"),
  ];

  var buttonsFollow = [
      $("#followAddMessage"),
      $("#followEditMessage"),
      $("#followDeleteMessage"),
    ],
    previousFollowID = $("#previousFollowID"),
    nextFollowID = $("#nextFollowID"),
    followTxt = $("#listFollow"),
    followNewMessage = $("#inputNewFollow"),
    displayFollow = $("#listFollowNum");

  var buttonsJoined = [
      $("#joinedAddMessage"),
      $("#joinedEditMessage"),
      $("#joinedDeleteMessage"),
    ],
    previousJoinedID = $("#previousJoinedID"),
    joinedTxt = $("#listJoined"),
    nextJoinedID = $("#nextJoinedID"),
    joinedNewMessage = $("#inputNewJoined"),
    displayJoined = $("#listJoinedNum");

  var buttonsSub = [
      $("#subAddMessage"),
      $("#subEditMessage"),
      $("#subDeleteMessage"),
    ],
    previousSubID = $("#previousSubID"),
    nextSubID = $("#nextSubID"),
    subTxt = $("#listSub"),
    subNewMessage = $("#inputNewSub"),
    displaySub = $("#listSubNum");

  var buttonsSpell = [
      $("#spellAddMessage"),
      $("#spellEditMessage"),
      $("#spellDeleteMessage"),
    ],
    previousSpellID = $("#previousSpellID"),
    nextSpellID = $("#nextSpellID"),
    spellTxt = $("#listSpell"),
    spellNewMessage = $("#inputNewSpell"),
    displaySpell = $("#listSpellNum");

  var buttonsRaid = [
      $("#raidAddMessage"),
      $("#raidEditMessage"),
      $("#raidDeleteMessage"),
    ],
    previousRaidID = $("#previousRaidID"),
    nextRaidID = $("#nextRaidID"),
    raidTxt = $("#listRaid"),
    raidNewMessage = $("#inputNewRaid"),
    displayRaid = $("#listRaidNum");

  var buttonsUnique = [
      $("#uniqueJoinAddMessage"),
      $("#uniqueEditMessage"),
      $("#uniqueDeleteMessage"),
    ],
    previousUniqueID = $("#previousUniqueID"),
    nextUniqueID = $("#nextUniqueID"),
    uniqueUserTxt = $("#listUniqueJoined"),
    uniqueMessageTxt = $("#listUniqueMessage"),
    uniqueNewUser = $("#inputNewUserUnique"),
    uniqueNewMessage = $("#inputNewMessageUnique"),
    displayUnique = $("#listUniqueJoinedNum");

  // Follow Edit Checkbox

  checkboxEdit[0].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        followTxt.prop("disabled", false);
        break;
      case false:
        followTxt.prop("disabled", true);
        break;
    }
  });

  // Joined Edit Checkbox

  checkboxEdit[1].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        joinedTxt.prop("disabled", false);
        break;
      case false:
        joinedTxt.prop("disabled", true);
        break;
    }
  });

  // Sub Edit Checkbox

  checkboxEdit[2].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        subTxt.prop("disabled", false);
        break;
      case false:
        subTxt.prop("disabled", true);
        break;
    }
  });

  // Spell Edit Checkbox

  checkboxEdit[3].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        spellTxt.prop("disabled", false);
        break;
      case false:
        spellTxt.prop("disabled", true);
        break;
    }
  });

  // Raid Edit Checkbox

  checkboxEdit[4].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        raidTxt.prop("disabled", false);
        break;
      case false:
        raidTxt.prop("disabled", true);
        break;
    }
  });

  // Unique Join Edit Checkbox

  checkboxEdit[5].change((select) => {
    var inputCheck = $(select.currentTarget).prop("checked");
    switch (inputCheck) {
      case true:
        uniqueMessageTxt.prop("disabled", false);
        break;
      case false:
        uniqueMessageTxt.prop("disabled", true);
        break;
    }
  });

  // Add new Message to Follow Message Alert List (Add Alert)

  buttonsFollow[0].click(() => {
    if (isEmptyOrSpaces(followNewMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill New Message Textfield",
      });
    } else if (followNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Follow Message Exceeded",
        text: "Make sure Follow Message is not over 200 characters!",
      });
    } else {
      try {
        eachAlert[alertArray[0]].messages.push(followNewMessage.val().trim());
        var addFollowAlert = JSON.stringify(alertsData, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "../../data/alerts.json"),
          addFollowAlert
        );
        Swal.fire({
          icon: "success",
          title: "New Follow Alert Message Saved",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  // Edit Message from Existing Follow Message Alert (Edit Alert)

  buttonsFollow[1].click(() => {
    if (checkboxEdit[0].prop("checked")) {
      if (isEmptyOrSpaces(followTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Textfield",
        });
      } else if (followTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Follow Message Exceeded",
          text: "Make sure Follow Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Follow Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachAlert[alertArray[0]].messages[count] = followTxt.val().trim();
              var editFollowAlert = JSON.stringify(alertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/alerts.json"),
                editFollowAlert
              );
              Swal.fire({
                icon: "success",
                title: "Follow Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Follow Message From List (Delete Alert)

  buttonsFollow[2].click(() => {
    Swal.fire({
      title: "Deleting Follow Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (eachAlert[alertArray[0]].messages.length === 1) {
          Swal.fire({
            icon: "error",
            title: "Cannot Delete",
            text: "One Message Must be Contained in Follow List",
          });
        } else {
          try {
            eachAlert[alertArray[0]].messages.splice(count, 1);
            var deleteFollowAlert = JSON.stringify(alertsData, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/alerts.json"),
              deleteFollowAlert
            );
            Swal.fire({
              icon: "success",
              title: "Follow Message Deleted",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } catch (error) {
            Swal.fire({
              icon: "info",
              title: "Unable to Edit",
              text: "Enable Checkbox to Edit Message!",
            });
          }
        }
      }
    });
  });

  // Add new Message to Joined Message Alert List (Add Alert)

  buttonsJoined[0].click(() => {
    if (isEmptyOrSpaces(joinedNewMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill New Message Textfield",
      });
    } else if (joinedNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Joined Message Exceeded",
        text: "Make sure Joined Message is not over 200 characters!",
      });
    } else {
      try {
        eachAlert[alertArray[1]].messages.push(joinedNewMessage.val().trim());
        var addJoinedAlert = JSON.stringify(alertsData, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "../../data/alerts.json"),
          addJoinedAlert
        );
        Swal.fire({
          icon: "success",
          title: "New Joined Alert Message Saved",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  // Edit Message from Existing Joined Message Alert (Edit Alert)

  buttonsJoined[1].click(() => {
    if (checkboxEdit[1].prop("checked")) {
      if (isEmptyOrSpaces(joinedTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Textfield",
        });
      } else if (joinedTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Joined Message Exceeded",
          text: "Make sure Joined Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Joined Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachAlert[alertArray[1]].messages[count] = joinedTxt.val().trim();
              var editJoinedAlert = JSON.stringify(alertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/alerts.json"),
                editJoinedAlert
              );
              Swal.fire({
                icon: "success",
                title: "Joined Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Joined Message From List (Delete Alert)

  buttonsJoined[2].click(() => {
    Swal.fire({
      title: "Deleting Joined Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (eachAlert[alertArray[1]].messages.length == 1) {
          Swal.fire({
            icon: "error",
            title: "Cannot Delete",
            text: "One Message Must be Contained in Joined List",
          });
        } else {
          try {
            eachAlert[alertArray[1]].messages.splice(count, 1);
            var deleteJoinedAlert = JSON.stringify(alertsData, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/alerts.json"),
              deleteJoinedAlert
            );
            Swal.fire({
              icon: "success",
              title: "Joined Message Deleted",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please Try Again Later!",
            });
          }
        }
      }
    });
  });

  // Add new Message to Sub Message Alert List (Add Alert)

  buttonsSub[0].click(() => {
    if (isEmptyOrSpaces(subNewMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill New Message Textfield",
      });
    } else if (subNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Sub Message Exceeded",
        text: "Make sure Sub Message is not over 200 characters!",
      });
    } else {
      try {
        eachAlert[alertArray[2]].messages.push(subNewMessage.val().trim());
        var addSubAlert = JSON.stringify(alertsData, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "../../data/alerts.json"),
          addSubAlert
        );
        Swal.fire({
          icon: "success",
          title: "New Sub Alert Message Saved",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  // Edit Message from Existing Joined Message Alert (Edit Alert)

  buttonsSub[1].click(() => {
    if (checkboxEdit[2].prop("checked")) {
      if (isEmptyOrSpaces(subTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Textfield",
        });
      } else if (subTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Sub Message Exceeded",
          text: "Make sure Sub Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Sub Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachAlert[alertArray[2]].messages[count] = subTxt.val().trim();
              var editSubAlert = JSON.stringify(alertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/alerts.json"),
                editSubAlert
              );
              Swal.fire({
                icon: "success",
                title: "Sub Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Sub Message From List (Delete Alert)

  buttonsSub[2].click(() => {
    Swal.fire({
      title: "Deleting Sub Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (eachAlert[alertArray[2]].messages.length === 1) {
          Swal.fire({
            icon: "error",
            title: "Cannot Delete",
            text: "One Message Must be Contained in Sub List",
          });
        } else {
          try {
            eachAlert[alertArray[2]].messages.splice(count, 1);
            var deleteSubAlert = JSON.stringify(alertsData, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/alerts.json"),
              deleteSubAlert
            );
            Swal.fire({
              icon: "success",
              title: "Sub Message Deleted",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please Try Again Later!",
            });
          }
        }
      }
    });
  });

  // Add new Message to Spell Message Alert List (Add Alert)

  buttonsSpell[0].click(() => {
    if (isEmptyOrSpaces(spellNewMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill New Message Textfield",
      });
    } else if (spellNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Spell Message Exceeded",
        text: "Make sure Spell Message is not over 200 characters!",
      });
    } else {
      try {
        eachAlert[alertArray[3]].messages.push(spellNewMessage.val().trim());
        var addSpellAlert = JSON.stringify(alertsData, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "../../data/alerts.json"),
          addSpellAlert
        );
        Swal.fire({
          icon: "success",
          title: "New Spell Alert Message Saved",
          allowOutsideClick: false,
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  // Edit Message from Existing Spell Message Alert (Edit Alert)

  buttonsSpell[1].click(() => {
    if (checkboxEdit[3].prop("checked")) {
      if (isEmptyOrSpaces(spellTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Textfield",
        });
      } else if (spellTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Spell Message Exceeded",
          text: "Make sure Spell Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Spell Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachAlert[alertArray[3]].messages[count] = spellTxt.val().trim();
              var editSpellAlert = JSON.stringify(alertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/alerts.json"),
                editSpellAlert
              );
              Swal.fire({
                icon: "success",
                title: "Spell Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Spell Message From List (Delete Alert)

  buttonsSpell[2].click(() => {
    Swal.fire({
      title: "Deleting Spell Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (eachAlert[alertArray[3]].messages.length === 1) {
          Swal.fire({
            icon: "error",
            title: "Cannot Delete",
            text: "One Message Must be Contained in Spell List",
          });
        } else {
          eachAlert[alertArray[3]].messages.splice(count, 1);
          var deleteSpellAlert = JSON.stringify(alertsData, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../data/alerts.json"),
            deleteSpellAlert
          );
          Swal.fire({
            icon: "success",
            title: "Spell Message Deleted",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      }
    });
  });

  // Add new Message to Raid Message Alert List (Add Alert)

  buttonsRaid[0].click(() => {
    if (isEmptyOrSpaces(raidNewMessage.val())) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill New Message Textfield",
      });
    } else if (raidNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Raid Message Exceeded",
        text: "Make sure Raid Message is not over 200 characters!",
      });
    } else {
      try {
        eachAlert[alertArray[4]].messages.push(raidNewMessage.val().trim());
        var addRaidAlert = JSON.stringify(alertsData, null, 2);
        fs.writeFileSync(
          path.join(__dirname, "../../data/alerts.json"),
          addRaidAlert
        );
        Swal.fire({
          icon: "success",
          title: "New Raid Alert Message Saved",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please Try Again Later!",
        });
      }
    }
  });

  // Edit Message from Existing Raid Message Alert (Edit Alert)

  buttonsRaid[1].click(() => {
    if (checkboxEdit[4].prop("checked")) {
      if (isEmptyOrSpaces(raidTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Textfield",
        });
      } else if (raidTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Raid Message Exceeded",
          text: "Make sure Raid Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Raid Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachAlert[alertArray[4]].messages[count] = raidTxt.val().trim();
              var editRaidAlert = JSON.stringify(alertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/alerts.json"),
                editRaidAlert
              );
              Swal.fire({
                icon: "success",
                title: "Raid Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Raid Message From List (Delete Alert)

  buttonsRaid[2].click(() => {
    Swal.fire({
      title: "Deleting Raid Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (eachAlert[alertArray[4]].messages.length == 1) {
          Swal.fire({
            icon: "error",
            title: "Cannot Delete",
            text: "One Message Must be Contained in Raid List",
          });
        } else {
          try {
            eachAlert[alertArray[4]].messages.splice(count, 1);
            var deleteRaidAlert = JSON.stringify(alertsData, null, 2);
            fs.writeFileSync(
              path.join(__dirname, "../../data/alerts.json"),
              deleteRaidAlert
            );
            Swal.fire({
              icon: "success",
              title: "Raid Message Deleted",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Please Try Again Later!",
            });
          }
        }
      }
    });
  });

  // Add new Message to Unique Message Alert List (Add Alert)

  buttonsUnique[0].click(() => {
    if (
      isEmptyOrSpaces(uniqueNewUser.val()) ||
      isEmptyOrSpaces(uniqueNewMessage.val())
    ) {
      Swal.fire({
        icon: "error",
        title: "Empty Field",
        text: "Please Fill Both Textfield",
      });
    } else if (uniqueNewUser.val().length >= 50) {
      Swal.fire({
        icon: "error",
        title: "Username Exceeded",
        text: "Make sure Username is not over 25 characters!",
      });
    } else if (uniqueNewMessage.val().length >= 200) {
      Swal.fire({
        icon: "error",
        title: "Message Exceeded",
        text: "Make sure Unique Message is not over 200 characters!",
      });
    } else {
      var sameUser;
      $.each(eachUniqueAlert, (key) => {
        if (uniqueNewUser.val() == key) {
          sameUser = key;
        }
      });
      if (uniqueNewUser.val() === sameUser) {
        Swal.fire({
          icon: "error",
          title: "User Already Exist",
          text: "Please Enter a Different User!",
        });
      } else {
        try {
          eachUniqueAlert[uniqueNewUser.val()] = uniqueNewMessage.val().trim();
          var addUniqueAlert = JSON.stringify(uniqueAlertsData, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../data/uniquejoin.json"),
            addUniqueAlert
          );
          Swal.fire({
            icon: "success",
            title: "New Unique Joined Alert Message Saved",
            allowOutsideClick: false,
          }).then((result) => {
            if (result) {
              window.location.reload();
            }
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
      }
    }
  });

  // Edit Message from Existing Unique Message Alert (Edit Alert)

  buttonsUnique[1].click(() => {
    if (checkboxEdit[5].prop("checked")) {
      if (isEmptyOrSpaces(uniqueUserTxt.val())) {
        Swal.fire({
          icon: "error",
          title: "Empty Field",
          text: "Please Fill Both Textfield",
        });
      } else if (uniqueUserTxt.val().length >= 25) {
        Swal.fire({
          icon: "error",
          title: "Username Exceeded",
          text: "Make sure Username is not over 25 characters!",
        });
      } else if (uniqueMessageTxt.val().length >= 200) {
        Swal.fire({
          icon: "error",
          title: "Message Exceeded",
          text: "Make sure Unique Message is not over 200 characters!",
        });
      } else {
        Swal.fire({
          title: "Editing Unique Message",
          icon: "warning",
          text: `Do you want to Edit Message?`,
          confirmButtonText: `Edit`,
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              eachUniqueAlert[
                uniqueArray[count]
              ] = uniqueMessageTxt.val().trim();
              var editUniqueAlert = JSON.stringify(uniqueAlertsData, null, 2);
              fs.writeFileSync(
                path.join(__dirname, "../../data/uniquejoin.json"),
                editUniqueAlert
              );
              Swal.fire({
                icon: "success",
                title: "Unique Alert Message Updated",
                allowOutsideClick: false,
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please Try Again Later!",
              });
            }
          }
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Unable to Edit",
        text: "Enable Checkbox to Edit Message!",
      });
    }
  });

  // Delete Selected Unique Message From List (Delete Alert)

  buttonsUnique[2].click(() => {
    Swal.fire({
      title: "Deleting Uniqie Message",
      icon: "warning",
      text: `Do you want to delete Message?`,
      confirmButtonText: `Delete`,
      confirmButtonColor: "#dc3545",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          delete eachUniqueAlert[uniqueArray[count]];
          var deleteUniqueAlert = JSON.stringify(uniqueAlertsData, null, 2);
          fs.writeFileSync(
            path.join(__dirname, "../../data/uniquejoin.json"),
            deleteUniqueAlert
          );
          Swal.fire({
            icon: "success",
            title: "Unique Message Deleted",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please Try Again Later!",
          });
        }
      }
    });
  });

  // Navigate through List of Follow Message Alerts

  displayFollow.html(
    "List of Follow Messages - (Edit/Delete) - " +
      `(${count + 1}/${eachAlert[alertArray[0]].messages.length})`
  );
  followTxt.val(eachAlert[alertArray[0]].messages[count]);
  previousFollowID.click(() => {
    if (count === 0) {
      count = eachAlert[alertArray[0]].messages.length;
    }
    count = count - 1;
    followTxt.val(eachAlert[alertArray[0]].messages[count]);
    displayFollow.html(
      "List of Follow Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[0]].messages.length})`
    );
  });

  nextFollowID.click(() => {
    count++;
    count = count % eachAlert[alertArray[0]].messages.length;
    followTxt.val(eachAlert[alertArray[0]].messages[count]);
    displayFollow.html(
      "List of Follow Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[0]].messages.length})`
    );
  });

  // Navigate through List of Joined Message Alerts

  displayJoined.html(
    "List of Joined Messages - (Edit/Delete) - " +
      `(${count + 1}/${eachAlert[alertArray[1]].messages.length})`
  );
  joinedTxt.val(eachAlert[alertArray[1]].messages[count]);
  previousJoinedID.click(() => {
    if (count === 0) {
      count = eachAlert[alertArray[1]].messages.length;
    }
    count = count - 1;
    joinedTxt.val(eachAlert[alertArray[1]].messages[count]);
    displayJoined.html(
      "List of Joined Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[1]].messages.length})`
    );
  });

  nextJoinedID.click(() => {
    count++;
    count = count % eachAlert[alertArray[1]].messages.length;
    joinedTxt.val(eachAlert[alertArray[1]].messages[count]);
    displayJoined.html(
      "List of Joined Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[1]].messages.length})`
    );
  });

  // Navigate through List of Sub Message Alerts

  displaySub.html(
    "List of Sub Messages - (Edit/Delete) - " +
      `(${count + 1}/${eachAlert[alertArray[2]].messages.length})`
  );
  subTxt.val(eachAlert[alertArray[2]].messages[count]);
  previousSubID.click(() => {
    if (count === 0) {
      count = eachAlert[alertArray[2]].messages.length;
    }
    count = count - 1;
    subTxt.val(eachAlert[alertArray[2]].messages[count]);
    displaySub.html(
      "List of Sub Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[2]].messages.length})`
    );
  });

  nextSubID.click(() => {
    count++;
    count = count % eachAlert[alertArray[2]].messages.length;
    subTxt.val(eachAlert[alertArray[2]].messages[count]);
    displaySub.html(
      "List of Sub Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[2]].messages.length})`
    );
  });

  // Navigate through List of Spell Message Alerts
  displaySpell.html(
    "List of Spell Messages - (Edit/Delete) - " +
      `(${count + 1}/${eachAlert[alertArray[3]].messages.length})`
  );
  spellTxt.val(eachAlert[alertArray[3]].messages[count]);
  previousSpellID.click(() => {
    if (count === 0) {
      count = eachAlert[alertArray[3]].messages.length;
    }
    count = count - 1;
    spellTxt.val(eachAlert[alertArray[3]].messages[count]);
    displaySpell.html(
      "List of Spell Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[3]].messages.length})`
    );
  });

  nextSpellID.click(() => {
    count++;
    count = count % eachAlert[alertArray[3]].messages.length;
    spellTxt.val(eachAlert[alertArray[3]].messages[count]);
    displaySpell.html(
      "List of Spell Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[3]].messages.length})`
    );
  });

  // Navigate through List of Raid Message Alerts

  displayRaid.html(
    "List of Raid Messages - (Edit/Delete) - " +
      `(${count + 1}/${eachAlert[alertArray[4]].messages.length})`
  );
  raidTxt.val(eachAlert[alertArray[4]].messages[count]);
  previousRaidID.click(() => {
    if (count === 0) {
      count = eachAlert[alertArray[4]].messages.length;
    }
    count = count - 1;
    raidTxt.val(eachAlert[alertArray[4]].messages[count]);
    displayRaid.html(
      "List of Raid Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[4]].messages.length})`
    );
  });

  nextRaidID.click(() => {
    count++;
    count = count % eachAlert[alertArray[4]].messages.length;
    raidTxt.val(eachAlert[alertArray[4]].messages[count]);
    displayRaid.html(
      "List of Raid Messages - (Edit/Delete) - " +
        `(${count + 1}/${eachAlert[alertArray[4]].messages.length})`
    );
  });

  // Navigate through List of Unique Message Alerts

  displayUnique.html(
    "List of Raid Messages - (Edit/Delete) - " +
      `(${count + 1}/${uniqueArray.length})`
  );
  uniqueUserTxt.val(uniqueArray[count]);
  uniqueMessageTxt.val(eachUniqueAlert[uniqueArray[count]]);

  previousUniqueID.click(() => {
    if (count === 0) {
      count = uniqueArray.length;
    }
    count = count - 1;
    uniqueUserTxt.val(uniqueArray[count]);
    uniqueMessageTxt.val(eachUniqueAlert[uniqueArray[count]]);
    displayUnique.html(
      "List of Raid Messages - (Edit/Delete) - " +
        `(${count + 1}/${uniqueArray.length})`
    );
  });

  nextUniqueID.click(() => {
    count++;
    count = count % uniqueArray.length;
    uniqueUserTxt.val(uniqueArray[count]);
    uniqueMessageTxt.val(eachUniqueAlert[uniqueArray[count]]);
    displayUnique.html(
      "List of Raid Messages - (Edit/Delete) - " +
        `(${count + 1}/${uniqueArray.length})`
    );
  });

  // Disable Spacebar
  uniqueNewUser.keypress((e) => {
    if (e.which == 32) {
      return false;
    }
  });
});
