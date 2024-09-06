<template>
    <header
        class="flex justify-between bg-cover bg-center bg-black px-10 py-4 text-white"
    >
        <!--Icon -->
        <div>Icon</div>
        <!--Side bar-->
        <div>
            <slot name="side_bar">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="lg:w-10 lg:h-10"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </slot>
        </div>
    </header>
</template>
