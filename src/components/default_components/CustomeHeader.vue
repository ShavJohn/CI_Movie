<template>
    <div>
        <b-container>
            <b-navbar toggleable="lg" class="custom_header">

            <router-link :to="{name: 'Home'}"> 
                <img src="../../assets/logos.png" alt="Logo">
            </router-link>   
            <select class="leng-select" v-model="locale" @change="$i18n.locale = locale">
                <option value="en" >{{ $t('en') }}</option>
                <option value="ru">{{ $t('ru') }}</option>
            </select>

            <b-navbar-toggle target="navbar-toggle-collapse" class="nav-toggle-collapse">
                <template #default="{ expanded }">
                    <b-icon class="nav-toggle-icon" v-if="expanded" icon="menu-up"></b-icon>
                    <b-icon class="nav-toggle-icon" v-else icon="menu-down"></b-icon>
                </template>
            </b-navbar-toggle>

                <b-collapse id="navbar-toggle-collapse" is-nav>
                    

                    <b-nav-form class="search-input">
                        <b-form-input size="sm" class="mr-sm-2 input" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0 button" type="submit">{{ $t('search') }}</b-button>
                    </b-nav-form>

                    <div class="switch">
                        <a class="random-link" href="#">{{  $t('random')  }}</a>
                        <b-form-checkbox @change="darModFunc" v-model="checked" name="check-button" switch></b-form-checkbox>
                        <label>{{ $t('night-mode') }}</label>
                    </div>
                </b-collapse>    
            </b-navbar>
        </b-container>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                checked: false,
                locale: 'en'
            }
        },
        methods: {
            darModFunc(){
                this.$root.$emit('dark-checker', this.checked);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>