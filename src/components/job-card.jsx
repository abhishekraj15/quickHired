import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { FiTool, FiAlertCircle } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Heart, MapPinIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { deleteJob, saveJob } from "@/api/apiJobs";
import useFetch from "@/hooks/use-fetch";
import { BarLoader } from "react-spinners";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const JobCard = ({
  job,
  isMyJob = false,
  savedInit = false,
  onJobSaved = () => {},
}) => {
  console.log("🚀 ~ job:", job);
  const [saved, setSaved] = useState(savedInit);
  const {
    fn: fnSavedJob,
    data: savedJob,
    loading: loadingSavedJob,
  } = useFetch(saveJob, { alreadySaved: saved });
  const { user } = useUser();

  const handleSaveJob = async () => {
    await fnSavedJob({
      user_id: user.id,
      job_id: job.id,
    });
    onJobSaved();
  };

  const { fn: fnDeleteJob, loading: loadingDeleteJob } = useFetch(deleteJob, {
    job_id: job.id,
  });

  const handleDeleteJob = async () => {
    await fnDeleteJob();
    onJobSaved();
  };

  useEffect(() => {
    if (saveJob !== undefined) setSaved(saveJob?.length > 0);
  }, [saveJob]);

  return (
    <Card className="flex flex-col">
      {loadingDeleteJob && (
        <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
      )}
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {job?.title}
          {isMyJob && (
            <Trash2Icon
              onClick={handleDeleteJob}
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {job.company && <img src={job.company.logo_url} className="h-6" />}
        </div>
        <div className="flex gap-2 items-center justify-end">
          <MapPinIcon size={15} />
          {job.location}
        </div>
        <hr />
        <p className="text-justify">
          {" "}
          {job.description.substring(0, job.description.indexOf("."))}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/job/${job.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            More Details
          </Button>
        </Link>
        {!isMyJob && (
          <AlertDialog>
            <AlertDialogTrigger>
              <Heart size={24} fill="red" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <FiAlertCircle size={32} color="orange" />{" "}
                {/* Alert icon in the header */}
                <AlertDialogTitle>Feature Under Development</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                <p>
                  <FiTool size={20} style={{ marginRight: "8px" }} />{" "}
                  {/* Small icon for inline visual */}
                  This feature is currently under development and will be
                  available soon. Stay tuned for updates!
                </p>
              </AlertDialogDescription>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  <FiTool
                    size={16}
                    color="gray"
                    style={{ marginRight: "8px" }}
                  />
                  Close
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </CardFooter>
    </Card>
  );
};

export default JobCard;
