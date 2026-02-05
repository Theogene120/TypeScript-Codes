var Status;
(function (Status) {
    Status["Success"] = "successful";
    Status["Error"] = "my error";
    Status["Loading"] = "still loading";
})(Status || (Status = {}));
console.log(Status.Error);
