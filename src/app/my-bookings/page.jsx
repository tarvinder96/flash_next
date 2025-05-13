"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SideBar from "@/components/SideBar";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function MyBookings() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);
    if (!user?.id) {
      setLoading(false);
      return;
    }
    fetch(
      `https://actyvsolutions.com/flash_pack/public/api/bookings/user/${user.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setBookings(data.data);
        } else {
          setBookings([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this booking?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(
        // `http://localhost:8000/api/delete-booking/${id}`,
        `https://actyvsolutions.com/flash_pack/public/api/delete-booking/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (data.status) {
        alert("Booking deleted successfully");
        setBookings((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete booking");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("An error occurred while deleting.");
    }
  };

  return (
    <section>
      <SideBar />
      <div className="p-4 sm:ml-64 bg-[#fff7f157] pb-10">
        <div className="rounded-lg mt-20">
          <div className="flex gap-3 lg:flex-nowrap flex-wrap">
            <div className="lg:w-3/3 w-full">
              <div className="w-full mt-3 bg-white shadow sm:rounded-lg border border-gray-200 p-5">
                <div className="relative overflow-x-auto">
                  <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      My Bookings
                    </h2>
                  </div>
                  {loading ? (
                    <p className="text-gray-600">Loading bookings...</p>
                  ) : bookings.length === 0 ? (
                    <p className="text-gray-500">No bookings found.</p>
                  ) : (
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th className="px-6 py-3">#</th>
                          <th className="px-6 py-3">Event Name</th>
                          <th className="px-6 py-3">Price</th>
                          <th className="px-6 py-3">Days</th>
                          <th className="px-6 py-3">Date</th>
                          <th className="px-6 py-3">Status</th>
                          <th className="px-6 py-3">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.map((booking, index) => (
                          <tr
                            key={booking.id}
                            className="bg-white border-b border-gray-200 hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {index + 1}
                            </td>

                            <td className="px-6 py-4">
                              {booking.event?.location || "N/A"}
                            </td>
                            <td className="px-6 py-4">
                              ${booking.price ?? "N/A"}
                            </td>
                            <td className="px-6 py-4">
                              {booking.event?.days || "N/A"}
                            </td>

                            <td className="px-6 py-4">
                              {new Date(booking.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                            </td>

                            <td className="px-6 py-4">
                              {booking.payment_status === "paid" ? (
                                <span className="text-green-600 font-medium">
                                  Paid
                                </span>
                              ) : (
                                <span className="text-yellow-600 font-medium">
                                  Pending
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleDelete(booking.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <TrashIcon className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
