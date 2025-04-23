import PropTypes from "prop-types";
import Image from "next/image";

export default function HolidaysSpecial({ imageSrc, title, description, tag, buttonText, link }) {
    return (
        <section>
            <div className="container">
                <a
                    href={link}
                    className="flex mt-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100"
                >
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        <Image
                            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
                            src={imageSrc}
                            alt="image"
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal md:w-1/2">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                {title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                {description}
                            </p>

                            <div className="mt-auto">
                                <button
                                    type="button"
                                    className="text-blue-700 hover:text-blue border  border-none     font-medium rounded-lg text-sm  text-center mb-0"
                                >
                                    {buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}

 
HolidaysSpecial.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};
